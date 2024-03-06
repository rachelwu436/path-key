// these are our routes

const express = require('express')
const router = express.Router()

// i will create a more specific function that can return a disease based on the ID. (getDisease(num: id))
// normally this data would be stored in a database, but since I haven't set up the database yet, i'm doing this for now.
router.get('/diseases', (req, res) => {
    const diseaseData = 
    [
        {
            "id": 1,
            "name": "Anthracnose",
            "altName": "Microdochium panattoniana",
            "description": "The symptoms first appear as small (2-3mm), watersoaked, light-brown spots on the outer leaves - often along the midrib of the lettuce. As the spots mature, the centres fall out giving the disease its characteristic shot-hole appearance. Severe infestations reults in leaf die-back, stunting, and poor head formation. Secondary organisms, particularly soft-rot bacteria, can also invade the spots.",
            "fixes": [
                "Healthy transplants",
                "Rotate with non-host crops",
                "Avoid planting in fields with a history of the disease",
                "Avoid overhead irrigation - use furrow or drip irrigation",
                "If overhead sprinklers, time irrigation to allow rapid drying of foliage",
                "Incorporate crop debris into soil after harvest",
                "Apply recommended fungicides - a.i.'s may include: (a) Preventative sprays such as cupric hydroxide, chlorothalonil, mancozeb, thiram (b) Systemic sprays (< 3 sprays per season): azoxystrobin, prochloraz (head lettuce)"
            ]
        },
        {
            "id": 2,
            "name": "Black root rot",
            "altName": "Thielaviopsis basicola",
            "description": "Infected plants appear healthy but are slow growing and remain stunted in comparison with healthy plants. Lower leaves of severe;y affected plants may be yellow. Lesions on roots are dark-brown and 4-8mm long. The lesions may coalesce and severely affect the entire root system, and in some extreme cases - roots are reduced to stubs.",
            "fixes": [
                "Plant varieties with resistance to the disease",
                "Avoid planting consecutive lettuce crops",
                "Ensure soil is free draining",
                "Prevent movement of black root rot-infested soil to non-infested fields",
                "Rotate out of lettuces for >4 years",
                "Pre-plant soil fumigation will give short term control",
                "Fungicide seed treatment: a.i.'s may include: myclobutanil, triadimenol"   
            ]
        },
        {
            "id": 3,
            "name": "Bottom rot",
            "altName": "Rhizoctonia solani",
            "description": "The first noticeable symptom is usually wilting of the outer leaves. Slightly sunken, small rust-to-brown spots on lower leaves - usually on the underside of the midrib. Under warm, wet conditions, the spots may rapidly expand, turn brown and rot infected tissues. Infection progresses upward in the plant and, ultimately, the entire head decays and turns slimy-brown. Brown web-like mycelial growth is often visible in infected tissues. Small, irregularly shaped brown-black solerotia, may be seen found in the fungal mould between dead leaves.",
            "fixes": [
                "Correct plant spacing to avoid over-crowding",
                "Plant varieties with erect growth habit to avoid foliage contact with soil",
                "Plant in raised, well-drained beds",
                "Control weeds",
                "Avoid irrigation near harvest",
                "Crop rotate with non-susceptible crops (e.g. Alliums, corn, cereals)",
                "Deep ploughing to bury infected lettuce debris",
                "Apply recommended fungicides such as systemic sprays (< 3 sprays per season): iprodione. boscalid"
            ]
        }
    ]
    res.send(diseaseData)
})

router.get('/crops', (req, res) => {
    const cropData = 
    [
        {
            "name": "Lettuce",
            "plantParts": [
                {
                    "part": "Roots",
                    "subParts": [
                        {
                            "subPart": "Seedlings",
                            "questions": [
                                "Roots brown and mushy; dark, watery rot in stem/taproot near soil surface; leaves yellow; plants wilted, stunted or collapsed"
                            ]
                        },
                        {
                            "subPart": "Larger plants",
                            "questions": [
                                "Dark brown lesions on roots, lesions may coalesce; in severely diseased plants, roots are reduced to stubs",
                                
                                "Taproot may be deformed; root system reduced; roots rotted or brown/dead; plant may be stunted; outer leaves yellow and wilted",
                                
                                "Plant stunted, wilting or yellowing; roots have brown lesions; show pitting, cracking and/or rough surface; reduced root system",
                                
                                "Plant collapsed or wilting; taproot pith rotting - greenish-to-black in colour and gelatinous in texture",
                            ]
                        },
                        {
                            "subPart": "Nodules and swellings on roots",
                            "questions": [
                                "Galls/knots (<6mm diam.) on roots; infected plants may be stunted and have pale green, or yellowish leaves"
                            ]
                        }
                    ]
                },
                {
                    "part": "Stems",
                    "subParts": [
                        {
                            "subPart": "Seedlings",
                            "questions": [
                                "Lesions or rotting in stem near soil surface; roots brown and mushy; leaves yellow; plants wilted, stunted, or collapsed"
                            ]
                        },
                        {
                            "subPart": "Larger plants",
                            "questions": [            
                                "Stem rot at soil-line (collar-rot); plant may be collapsed; white mycelium covers affected tissues; many small, brown, round sclerotia",
                                
                                "Grey or grey-brown, sunken lesions covered with grey mould"
                            ]
                        },
                        {
                            "subPart": "Internal stem discolouration",
                            "questions": [
                                "Rusty-brown discolouration in stem and taproot vascular tissues; plant wilting/yellowing/stunted/collapsed",
                                
                                "Greenish-brown discoloration in stem and taproot vascular tissues; plant wilting/yellowing/stunted (similar to Fusarium wilt)"
                            ]
                        }
                    ]
                },
            ]
        },
        {
            "name": "Apple",
            "plantParts": [
                {
                    "part": "Roots",
                    "subParts": [
                        {
                            "subPart": "Seedlings",
                            "questions": [
                                "Roots brown and mushy; dark, watery rot in stem/taproot near soil surface; leaves yellow; plants wilted, stunted or collapsed"
                            ]
                        },
                        {
                            "subPart": "Larger plants",
                            "questions": [
                                "Dark brown lesions on roots, lesions may coalesce; in severely diseased plants, roots are reduced to stubs",
                                
                                "Taproot may be deformed; root system reduced; roots rotted or brown/dead; plant may be stunted; outer leaves yellow and wilted",
                                
                                "Plant stunted, wilting or yellowing; roots have brown lesions; show pitting, cracking and/or rough surface; reduced root system",
                                
                                "Plant collapsed or wilting; taproot pith rotting - greenish-to-black in colour and gelatinous in texture"
                            ]
                        },
                        {
                            "subPart": "Nodules and swellings on roots",
                            "questions": [
                                "Galls/knots (<6mm diam.) on roots; infected plants may be stunted and have pale green, or yellowish leaves"
                            ]
                        }
                    ]
                },
                {
                    "part": "Stems",
                    "subParts": [
                        {
                            "subPart": "Seedlings",
                            "questions": [
                                "Lesions or rotting in stem near soil surface; roots brown and mushy; leaves yellow; plants wilted, stunted, or collapsed"
                            ]
                        },
                        {
                            "subPart": "Larger plants",
                            "questions": [
                                "Stem rot at soil-line (collar-rot); plant may be collapsed; white mycelium covers affected tissues; many small, brown, round sclerotia",
                                
                                "Grey or grey-brown, sunken lesions covered with grey mould"
                            ]
                        },
                        {
                            "subPart": "Internal stem discolouration",
                            "questions": [
                                "Rusty-brown discolouration in stem and taproot vascular tissues; plant wilting/yellowing/stunted/collapsed",
                                
                                "Greenish-brown discoloration in stem and taproot vascular tissues; plant wilting/yellowing/stunted (similar to Fusarium wilt)"
                            ]
                        }
                    ]
                },
            ]
        }

    ]
    res.send(cropData)
})

module.exports = router

