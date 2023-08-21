require('dotenv').config();
const { User } = require('../models');

//seed data

async function seedDatabase(){
    try{
        //Add an admin account and block access to restricted pages.
        const admin = await User.findOne({
            where: {name : 'admin'}
        });
        if(!admin){
            const createAdmin = await User.create({
                name: 'admin',
                email: 'admin@admin.com',
                password: process.env.ADMIN_PASS
            });
            if(createAdmin){
                console.log(`Create admin ${createAdmin.name}`);
            }
            else{
                console.log('Failed to create admin');
            }
        }
        else{
            console.log('Admin exists.')
        }
    }
    catch(error){
        console.error(error);
    }
};

module.exports = seedDatabase;