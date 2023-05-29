const asyncHandler =require('express-async-handler');
const Contact =require('../models/contactModel');

//@desc Get all contacts
//@route Get  /contacts
//@access public
const getContacts = asyncHandler (async(req,res) => {
    const contacts=  await Contact.find();
    res.status(200).json(contacts); 
})

//@desc Get single contact by id 
//@desc Get /contacts/id
//@access public
const getContact= asyncHandler(async(req,res)=>{
    const contact =await Contact.findById(req.params.id)
    if(!contact){
        res.status(404);
        throw new Error("contact not found")
    }
    res.status(200).json(contact);
})

//@desc Post   contacts
//@route Post  /contacts
//@access public
const createContact = asyncHandler(async(req,res) => {
   const{name,email,phone}=req.body;
   if(!name || !email || !phone){
    res.status(400);
throw new Error("all fields are mandatory");
   }
   const contact =await Contact.create(req.body)
res.status(201).json(contact);
})

//desc Update contact
//@route update /contacts/id
//@access public
const updateContact=asyncHandler(async(req,res)=>{
    const updatedContact = await Contact.findByIdAndUpdate(req.params.id,req.body,{new:true});
     if(!updatedContact){
    res.status(400);
throw new Error("contact not found");
   }
    res.status(200).json(updatedContact);
})

//@desc Delete contact
//@route /contacts/id
//@access public
const deleteContact = asyncHandler(async(req,res)=>{
   const removeContact = await Contact.findByIdAndDelete(req.params.id); 
   if(!removeContact){
    res.status(400);
throw new Error("contact not found");
   }
res.status(200).json({message:"deleted successfully"});
})

module.exports={
    getContacts,
    updateContact,
    createContact,
    deleteContact,
    getContact
}