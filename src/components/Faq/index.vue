<template>
    <div class="faq-section">
      <h2 class="faq-title">Frequently Asked Questions (FAQ)</h2>
      <div class="faq-container">
        <div class="faq-item" v-for="(item, index) in faqs" :key="index">
          <h3 class="faq-question">{{ item.question }}</h3>
          <p class="faq-answer">{{ item.answer }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        faqs: [
          {
            question: "Do I have to engage a Customs broker if I import something from overseas?",
            answer: "Yes, if the value of goods is equivalent to NZ$1,000 or more and the goods are for commercial use. If it is for personal use, you are still encouraged to engage a broker like us, for fast, efficient and hassle-free clearance in order to ensure your imported goods can be delivered to your door as quickly as possible."
          },
          {
            question: "When do I need to apply for a client code?",
            answer: "When you are trying to import goods valued at NZ$1,000 or more."
          },
          {
            question: "I have been issued a client code. Can I use it for both importation and exportation?",
            answer: "Yes."
          },
          {
            question: "Does my client code expire?",
            answer: "No. It is permanently valid and does not expire."
          },
          {
            question: "What do I need to provide to my broker for clearing my goods?",
            answer: "Invoice, list of goods, shipping document, your client code (if you have one. Otherwise, we can apply for one on your behalf) and where applicable, insurance details, Fumigation Certificate, Sea Container Quarantine Declaration, Certificate of Origin."
          },
          {
            question: "What is IETF?",
            answer: "It is an abbreviation for Import Entry Transaction Fee New Zealand Customs charge. It is on top of any duty & GST chargeable."
          }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .faq-section {
    padding: 40px;
    background-color: #ffffff; /* White background for a clean look */
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    /* max-width: 800px; */
    margin: 0 auto;
  }
  
  .faq-title {
    font-size: 24px;
    /* margin-bottom: 20px; */
    text-align: center;
    color: #333; /* Darker text for better readability */
    font-weight: 700;
    font-size: 1.875rem;
  }
  
  .faq-container {
    display: flex;
    flex-direction: column;
    gap: 15px; /* Space between items */
  }
  
  .faq-item {
    border: 1px solid #ffffff; /* Light border for separation */
    border-radius: 5px;
    padding: 15px;
    transition: border-color 0.2s;
  }
  
  .faq-item:hover {
    border-color: #e0e0e0; /* Change border color on hover */
  }
  
  .faq-question {
    font-weight: bold;
    font-size: 18px;
    /* margin-bottom: 10px; */
  }
  
  .faq-answer {
    font-size: 16px;
    color: #555; /* Slightly lighter text for answers */
  }
  </style>