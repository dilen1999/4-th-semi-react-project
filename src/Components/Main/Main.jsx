import React from 'react'
import './main.css'
import {AiFillMedicineBox} from 'react-icons/ai'
import {BsClipboardCheck} from 'react-icons/bs'
import img from '../../Assets/ASPIRIN.jpg'
import img2 from '../../Assets/TYLENOL.png'
import img3 from '../../Assets/thermometer.jpg'
import img4 from '../../Assets/MOTRIN.jpg'
import img5 from '../../Assets/Iron Supplements.webp'
import img6 from '../../Assets/hand wash.jpeg'
import img7 from '../../Assets/Crocin.avif'
import img8 from '../../Assets/Nitroglycerin.jpeg'
import img9 from '../../Assets/Patanjali Nutrela Vitamin.webp'

const Data = [
  {
    id:1,
    imgSrc: img,
    destTitle: 'Asprin',
    location: 'colombo',
    grade: 'CULTURAL RELAX',
    amount: '$30',
    description: 'Aspirin, also known by its generic name acetylsalicylic acid, is a widely used medication with both pain-relieving (analgesic) and anti-inflammatory properties. It belongs to a class of drugs known as non-steroidal anti-inflammatory drugs (NSAIDs). Aspirin is commonly used to alleviate minor aches and pains, reduce fever, and help manage various inflammatory conditions, such as arthritis'

  },

  {
    id:2,
    imgSrc: img2,
    destTitle: 'Tylenol',
    location: 'mannar',
    grade: 'CULTURAL RELAX',
    amount: '$120',
    description: 'Tylenol is a well-known brand of over-the-counter medication that contains the active ingredient acetaminophen (paracetamol). Acetaminophen is a widely used pain reliever and fever reducer. Tylenol is commonly employed for various purposes, including the relief of mild to moderate pain such as headaches and muscle aches, reducing fever associated with illnesses like the common cold, and managing discomfort in conditions like arthritis. Its available in various forms, including tablets and liquid, and there are versions designed for use in children. To use Tylenol safely, its essential to follow the recommended dosage and seek guidance from healthcare professionals when needed to avoid potential side effects and ensure its effectiveness.'

  },

  {
    id:3,
    imgSrc: img3,
    destTitle: 'Thermometer',
    location: 'vavuniya',
    grade: 'CULTURAL RELAX',
    amount: '$60',
    description: 'A thermometer is a simple yet essential medical device used for measuring body temperature. It typically consists of a slender, glass or digital instrument with a temperature scale. The most common types are digital and mercury thermometers. To take a persons temperature, the thermometer is placed under the tongue, in the ear, or on the forehead, depending on the design. The recorded temperature is a crucial indicator of ones health, helping to identify fever, monitor illness, or ensure general well-being. Thermometers are also employed in various industrial and scientific applications for precise temperature measurements. They play a crucial role in health and safety, allowing individuals to monitor and respond to changes in body temperature.'

  },

  {
    id:4,
    imgSrc: img4,
    destTitle: 'Motrin',
    location: 'colombo',
    grade: 'CULTURAL RELAX',
    amount: '$10',
    description: 'Motrin is a popular over-the-counter medication that contains ibuprofen as its active ingredient. Ibuprofen is an NSAID that is commonly used for its pain-relieving and anti-inflammatory effects. Motrin is widely used to alleviate mild to moderate pain, including headaches, muscle aches, and dental pain. It is also effective in reducing fever associated with various illnesses, such as the common cold or flu. In addition to its OTC formulations, prescription-strength ibuprofen is available for more severe conditions. Its essential to use Motrin as directed on the product label or as advised by a healthcare professional to ensure its effectiveness and to minimize the risk of potential side effects. Always consult with a healthcare provider if you have specific questions or concerns about using Motrin.'

  },

  {
    id:5,
    imgSrc: img5,
    destTitle: 'Iron Supplements',
    location: 'vavuniya',
    grade: 'CULTURAL RELAX',
    amount: '$120',
    description: 'Iron Supplements are medications or nutritional supplements that contain iron as the active ingredient. Iron is an essential mineral for the human body, crucial for the production of hemoglobin, a protein in red blood cells that transports oxygen throughout the body.'

  },

  {
    id:6,
    imgSrc: img6,
    destTitle: 'Hand Wash',
    location: 'Jaffna',
    grade: 'CULTURAL RELAX',
    amount: '$55',
    description: 'Hand Wash is a hygiene product designed for the effective cleansing and disinfection of hands. It comes in liquid form and is used to remove dirt, bacteria, viruses, and other contaminants from the skin. Hand wash is a vital tool in preventing the spread of infections, including colds, flu, and various other communicable diseases.'

  },

  {
    id:7,
    imgSrc: img7,
    destTitle: 'Crocin',
    location: 'vavuniya',
    grade: 'CULTURAL RELAX',
    amount: '$90',
    description: 'Crocin is a brand of medication that contains paracetamol as its active ingredient. Paracetamol is a popular and effective over-the-counter pain reliever and fever reducer. It is widely used to alleviate mild to moderate pain, including headaches, muscle aches, dental pain, and menstrual cramps. Crocin is also used to reduce fever associated with various illnesses, such as the common cold and flu.'

  },

  {
    id:8,
    imgSrc: img8,
    destTitle: 'Nitroglycerin',
    location: 'colombo',
    grade: 'CULTURAL RELAX',
    amount: '$85',
    description: 'Nitroglycerin, often administered in the form of sublingual tablets or spray, is a medication that belongs to a class of drugs known as nitrates. It works by dilating and relaxing the blood vessels, particularly the coronary arteries, which supply blood to the heart muscle. This dilation improves blood flow and oxygen delivery to the heart, relieving angina symptoms such as chest pain or pressure.'

  },

  {
    id:9,
    imgSrc: img9,
    destTitle: 'Nutrela',
    location: 'kegalle',
    grade: 'CULTURAL RELAX',
    amount: '$45',
    description: 'Nutrela is a well-known brand in the food industry, specializing in soy-based products. It offers a variety of food items made from soybeans, including textured vegetable protein (TVP), soy granules, and soy chunks. These products are often used as meat alternatives in vegetarian and vegan diets due to their high protein content and meat-like texture. Nutrela products are versatile and can be used in a wide range of savory dishes, such as curries, stir-fries, and salads, to enhance protein intake and add a meaty texture to vegetarian or vegan meals.'

  },
  
]

const main = () => {
  return (
   <section className='main container section'>
    <div className='secTitle'>
      <h3 className='title'>
        Most popular medicines
      </h3>
    </div>

    <div className='secContent grid'>

    {
      Data.map(({id,imgSrc, destTitle, location,
      grade, amount, description})=>{
        return(
          <div key={id}
          className='singleDestination' >
              <div className='imageDiv'>
                <img src={imgSrc} alt={destTitle}/>
              </div>

              <div className='cardInfo'>
                <h4 className='destTitle'>{destTitle}</h4>
                <span className='continent flex'>
                  <AiFillMedicineBox className= 'icon'/>
                  <span className='name' >{location}</span>
                </span>

                <div className='fees flex'>
                  <div className='grade'>
                    <span>{grade}<small>+1</small></span>
                </div>
                <div className='price'>
                  <h5>{amount}</h5>
                  </div>
                </div>

                <div className='desc'>
                  <p>{description}</p>
                </div>

                <button className='btn flex'>
                  DETAILS <BsClipboardCheck className="icon"/>
                </button>

              </div>
 

            </div>


        )
      })
    }

    </div>

    

   </section>
  )
}

export default main
