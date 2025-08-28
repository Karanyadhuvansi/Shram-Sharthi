import { Job, Profile, FAQItem } from '../types';

export const jobCategories = [
    { en: 'Construction', hi: 'निर्माण' },
    { en: 'IT & Software', hi: 'आईटी और सॉफ्टवेयर' },
    { en: 'Domestic Help', hi: 'घरेलू मदद' },
    { en: 'Manufacturing', hi: 'विनिर्माण' },
    { en: 'Hospitality', hi: 'अतिथ्य' },
    { en: 'Corporate', hi: 'कॉर्पोरेट' },
    { en: 'Transportation', hi: 'परिवहन' },
];

export const mockJobs: Job[] = [
  {
    id: 7,
    title: { en: 'General Contractor (Thekedar)', hi: 'सामान्य ठेकेदार (ठेकेदार)' },
    company: 'Infra Projects Ltd.',
    location: 'Noida',
    salary: 'Project Based',
    type: { en: 'Contract', hi: 'अनुबंध' },
    category: 'Construction',
    description: { en: 'Seeking an experienced general contractor to oversee a new commercial building project from start to finish.', hi: 'एक नए वाणिज्यिक भवन परियोजना की शुरुआत से अंत तक देखरेख करने के लिए एक अनुभवी सामान्य ठेकेदार की तलाश है।' }
  },
  {
    id: 8,
    title: { en: 'Skilled Mason (Mistri)', hi: 'कुशल मिस्त्री' },
    company: 'Luxury Homes Co.',
    location: 'Gurgaon',
    salary: '₹850/day',
    type: { en: 'Daily', hi: 'दैनिक' },
    category: 'Construction',
    description: { en: 'Required skilled mason for high-quality bricklaying and plastering work in luxury apartments.', hi: 'लक्जरी अपार्टमेंट में उच्च गुणवत्ता वाली ईंट-पत्थर और पलस्तर के काम के लिए कुशल मिस्त्री की आवश्यकता है।' }
  },
  {
    id: 9,
    title: { en: 'Labour Team (10 members)', hi: 'मजदूर टीम (10 सदस्य)' },
    company: 'Highway Construction Co.',
    location: 'Faridabad',
    salary: '₹550/day per person',
    type: { en: 'Daily', hi: 'दैनिक' },
    category: 'Construction',
    description: { en: 'Urgent need for a team of 10 hardworking labourers for a new highway project.', hi: 'एक नई राजमार्ग परियोजना के लिए 10 मेहनती मजदूरों की एक टीम की तत्काल आवश्यकता है।' }
  },
  {
    id: 1,
    title: { en: 'React Developer', hi: 'रिएक्ट डेवलपर' },
    company: 'Tech Solutions Inc.',
    location: 'Bangalore',
    salary: '₹1,20,000/month',
    type: { en: 'Full-time', hi: 'पूर्णकालिक' },
    category: 'IT & Software',
    description: { en: 'Looking for a skilled React developer to build modern user interfaces.', hi: 'आधुनिक यूजर इंटरफेस बनाने के लिए एक कुशल रिएक्ट डेवलपर की तलाश है।' }
  },
  {
    id: 2,
    title: { en: 'Construction Site Manager', hi: 'निर्माण स्थल प्रबंधक' },
    company: 'BuildWell Corp.',
    location: 'Mumbai',
    salary: '₹85,000/month',
    type: { en: 'Contract', hi: 'अनुबंध' },
    category: 'Construction',
    description: { en: 'Manage and oversee daily operations on our construction site.', hi: 'हमारे निर्माण स्थल पर दैनिक कार्यों का प्रबंधन और देखरेख करें।' }
  },
  {
    id: 3,
    title: { en: 'Live-in Nanny', hi: 'लिव-इन नैनी' },
    company: 'Sharma Family',
    location: 'Delhi',
    salary: '₹25,000/month + lodging',
    type: { en: 'Full-time', hi: 'पूर्णकालिक' },
    category: 'Domestic Help',
    description: { en: 'Caring and responsible nanny needed for two young children.', hi: 'दो छोटे बच्चों के लिए देखभाल करने वाली और जिम्मेदार नानी की जरूरत है।' }
  },
  {
    id: 4,
    title: { en: 'Hotel Receptionist', hi: 'होटल रिसेप्शनिस्ट' },
    company: 'Grand Palace Hotel',
    location: 'Jaipur',
    salary: '₹30,000/month',
    type: { en: 'Full-time', hi: 'पूर्णकालिक' },
    category: 'Hospitality',
    description: { en: 'Friendly and professional receptionist to welcome our guests.', hi: 'हमारे मेहमानों का स्वागत करने के लिए मैत्रीपूर्ण और पेशेवर रिसेप्शनिस्ट।' }
  },
  {
    id: 5,
    title: { en: 'Daily Labourer', hi: 'दैनिक मजदूर' },
    company: 'Various Contractors',
    location: 'Pune',
    salary: '₹500/day',
    type: { en: 'Daily', hi: 'दैनिक' },
    category: 'Construction',
    description: { en: 'General construction labour required for various sites.', hi: 'विभिन्न स्थलों के लिए सामान्य निर्माण श्रमिक की आवश्यकता है।' }
  },
  {
    id: 6,
    title: { en: 'Mason (Mistri)', hi: 'मिस्त्री' },
    company: 'Renovate Homes',
    location: 'Delhi',
    salary: '₹700/day',
    type: { en: 'Daily', hi: 'दैनिक' },
    category: 'Construction',
    description: { en: 'Experienced mason needed for residential projects.', hi: 'आवासीय परियोजनाओं के लिए अनुभवी मिस्त्री की आवश्यकता है।' }
  },
];

const defaultProfileImage = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png';

export const mockProfiles: Profile[] = [
  {
    id: 1,
    name: 'Ramesh Kumar',
    skill: { en: 'Master Plumber', hi: 'मास्टर प्लंबर' },
    rating: 4.8,
    location: 'Pune',
    imageUrl: defaultProfileImage
  },
  {
    id: 2,
    name: 'Sunita Sharma',
    skill: { en: 'UI/UX Designer', hi: 'यूआई/यूएक्स डिजाइनर' },
    rating: 4.9,
    location: 'Bangalore',
    imageUrl: defaultProfileImage
  },
  {
    id: 3,
    name: 'Anil Singh',
    skill: { en: 'Electrician', hi: 'इलेक्ट्रीशियन' },
    rating: 4.7,
    location: 'Kolkata',
    imageUrl: defaultProfileImage
  },
  {
    id: 4,
    name: 'Priya Patel',
    skill: { en: 'Accountant', hi: 'अकाउंटेंट' },
    rating: 5.0,
    location: 'Ahmedabad',
    imageUrl: defaultProfileImage
  },
  {
    id: 5,
    name: 'Deepak Verma',
    skill: { en: 'Carpenter', hi: 'बढ़ई' },
    rating: 4.6,
    location: 'Mumbai',
    imageUrl: defaultProfileImage
  },
  {
    id: 6,
    name: 'Meena Kumari',
    skill: { en: 'Housekeeping', hi: 'गृह व्यवस्था' },
    rating: 4.8,
    location: 'Delhi',
    imageUrl: defaultProfileImage
  },
  {
    id: 7,
    name: 'Rajesh Gupta',
    skill: { en: 'Driver', hi: 'चालक' },
    rating: 4.9,
    location: 'Pune',
    imageUrl: defaultProfileImage
  },
  {
    id: 8,
    name: 'Suresh Yadav',
    skill: { en: 'Painter', hi: 'पेंटर' },
    rating: 4.5,
    location: 'Bangalore',
    imageUrl: defaultProfileImage
  }
];

export const mockFaqs: FAQItem[] = [
    {
        id: 1,
        question: { en: "How do I create an account?", hi: "मैं एक खाता कैसे बनाऊं?" },
        answer: { en: "Click on the 'Login / Register' button and enter your mobile number. You will receive an OTP to verify and create your account.", hi: "'लॉगिन / रजिस्टर' बटन पर क्लिक करें और अपना मोबाइल नंबर दर्ज करें। आपको अपना खाता सत्यापित करने और बनाने के लिए एक ओटीपी प्राप्त होगा।" }
    },
    {
        id: 2,
        question: { en: "Is it free to post a job?", hi: "क्या नौकरी पोस्ट करना मुफ़्त है?" },
        answer: { en: "Yes, posting a job on Shram Sharthi is completely free for all employers.", hi: "हाँ, श्रम सारथी पर नौकरी पोस्ट करना सभी नियोक्ताओं के लिए पूरी तरह से मुफ़्त है।" }
    },
    {
        id: 3,
        question: { en: "How can I apply for a job?", hi: "मैं नौकरी के लिए आवेदन कैसे कर सकता हूँ?" },
        answer: { en: "Find a job you are interested in and click the 'Apply Now' button. You will need to have a complete profile to apply.", hi: "एक नौकरी खोजें जिसमें आपकी रुचि हो और 'अभी आवेदन करें' बटन पर क्लिक करें। आवेदन करने के लिए आपके पास एक पूर्ण प्रोफ़ाइल होनी चाहिए।" }
    },
     {
        id: 4,
        question: { en: "How is my data protected?", hi: "मेरा डेटा कैसे सुरक्षित है?" },
        answer: { en: "We use industry-standard security measures to protect your personal information. Your privacy is our top priority.", hi: "हम आपकी व्यक्तिगत जानकारी की सुरक्षा के लिए उद्योग-मानक सुरक्षा उपायों का उपयोग करते हैं। आपकी गोपनीयता हमारी सर्वोच्च प्राथमिकता है।" }
    }
];