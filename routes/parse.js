const express = require('express');
const router = express.Router();
const Activity = require('../models/activity');
const wordnet = require('node-wordnet');
const wn = new wordnet();

router.post('/', async (req, res) => {
    try {
        const text = req.body.text.trim();
    
        if (!text || text.trim() === '') {
          return res.status(400).json({ error: 'Bad Request: The text cannot be empty.' });
        }
      
        const wordsList = text.replace(/[^a-zA-Z\s]/g, '').toLowerCase().split(' ');

        let uniqueWords = [...new Set(wordsList)];
        uniqueWords = uniqueWords.filter(item => item.trim() !== "");

        let excludedWords = ["a", "the", "and", "of", "in", "be", "also", "as", " "];
      
        
        let wordsToCount = [];  
      
        for (let word of uniqueWords) {
          if (!excludedWords.includes(word)){
      
            await new Promise((resolve, reject) => {
      
              wn.lookup(word, (err, definitions) => {
      
                if (err) reject(err);
      
                let synsetOffsets = [];
                for (let definition of definitions){
                  synsetOffsets.push(definition.synsetOffset);
                } 
      
                let mustAdd = true;
      
                if (!(Object.keys(wordsToCount).length === 0)) {
                  keys = Object.keys(wordsToCount);
                  for (let key of keys) {
                    if(synsetOffsets.some(item => wordsToCount[key].synsets.includes(item))) {
                      wordsToCount[key].count++;
                      mustAdd = false;
                      break; 
                    }
                  }   
                }
      
                //is new
                if (mustAdd){
                  wordsToCount[word] = { 
                    synsets: synsetOffsets,
                    count: 0
                  }            
                }  
                
                resolve();  
              });
            })
          }
        }

        let response = Object.keys(wordsToCount).map(key => {
          return {
            word: key,
            synonyms_found: wordsToCount[key].count
          };
        });
      
        const analysis = JSON.stringify(response);
        Activity.create({ text, analysis });      
      
        res.json({ text, analysis });
      }
      catch (err){
        return res.json({ error: err.stack});
      }
});

module.exports = router;
