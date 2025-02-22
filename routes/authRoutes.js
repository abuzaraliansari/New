const express = require('express');
const { login } = require('../controllers/loginController');
//const { addProperty } = require('../controllers/PropertyController');
//const { addOwner } = require('../controllers/OwnerController');
//const { addfamilyMember } = require('../controllers/FamilyController');
//const { addPropertyDetails } = require('../controllers/PropertyDetailsController');
//const { addPropertyDetails1 } = require('../controllers/PropertyDetailsAreaController');
//const PropertyDetailsHouseController = require('../controllers/PropertyDetailsHouseController'); // Imported correctly
//const { addSpecialConsideration } = require('../controllers/SpecialConsiderationController');
//const { GetLocality } = require('../controllers/localityController');
//const { GetColony } = require('../controllers/ColonyController');
//const { uploadFile, upload } = require('../controllers/fileUploadController');
//const { getMaxHouseNumber } = require('../controllers/HouseController'); // Added HouseController

const authenticateToken = require('../middlewares/authMiddleware');


const router = express.Router();

router.post('/login', login);
//router.post('/property', addProperty);
//router.post('/owner', authenticateToken,addOwner);
//router.post('/family',authenticateToken, addfamilyMember);
//router.post('/PropertyDetails',addPropertyDetails);
//router.post('/PropertyDetails1', authenticateToken,addPropertyDetails1);
//router.post('/PropertyDetailsHouse', authenticateToken,PropertyDetailsHouseController.update);
//router.post('/SpecialConsideration', authenticateToken,addSpecialConsideration);
//router.post('/Locality', GetLocality);
//router.get('/Colony', GetColony);
//router.post('/upload', authenticateToken,upload.single('file'), uploadFile);
//router.post('/getMaxHouseNumber', getMaxHouseNumber); 




module.exports = router;