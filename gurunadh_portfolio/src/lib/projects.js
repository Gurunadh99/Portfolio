const projects = [
  {
    slug: 'visio-voice',
    title: 'Visio-Voice: Image-to-Audio for the Visually Impaired',
    year: 2024,
    tech: ['Python','Deep Learning','NLP','Speech'],
    summary: 'Generates descriptive audio captions from images for accessibility.',
    metrics: ['~80% caption relevancy','<1.2s inference latency'],
    publication: 'ICITEICS 2024'
  },
  {
    slug: 'crowd-monitor',
    title: 'Crowd Monitoring — Fight Detection',
    year: 2023,
    tech: ['Computer Vision','Deep Learning','OpenCV'],
    summary: 'Real-time fight detection prototype for crowd safety.',
    metrics: ['~90% recall','<2s alert latency']
  },
  {
    slug: 'ekart',
    title: 'eKart — Cloud E-commerce Platform',
    year: 2024,
    tech: ['AWS','HTML','CSS','Recommendation Engine'],
    summary: 'End-to-end shopping platform hosted on AWS with recommendations.',
    metrics: ['12% simulated CTR uplift','Published ICCICA 2024']
  },
  {
    slug: 'heart-disease',
    title: 'Heart Disease Prediction',
    year: 2023,
    tech: ['Python','scikit-learn'],
    summary: 'Clinical-feature-based risk prediction model with explainability.',
    metrics: ['~82% accuracy']
  }
];

export default projects;
