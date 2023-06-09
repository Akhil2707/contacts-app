const express = require('express')
const router=express.Router();
const {getContacts,updateContact,deleteContact,createContact,getContact} =require('../controllers/contactControllers')

router.route('/').get(getContacts)

router.route('/:id').get(getContact)

router.route('/').post(createContact)

router.route('/:id').put(updateContact)

router.route('/:id').delete(deleteContact)

module.exports= router;