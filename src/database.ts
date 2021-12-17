const mongoose = require('mongoose');
import config from './config';

(async () => {
   try {
        const mongooseOptions = {
            useUnifiedTopology: true,
            useNewUrlParser: true
        }
        const db = await mongoose.connect(`mongodb://${config.MONGO_HOST}/${config.MONGO_DATABASE}`, mongooseOptions);
        console.log('database is  connected')      
         
    } catch (error) {
       console.error(error) 
   }
    
})()