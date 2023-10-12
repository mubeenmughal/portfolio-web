import app from '../utils/images/Rectangle 20.png';
import tool from '../utils/images/Rectangle 24.png'
import web from '../utils/images/Rectangle 21.png'

export const workHistory = [
  {
    title: 'Forrio',
    description: `It helps us to create a portfolio of our work and share it others. you can also become collaborator
    with others. You can upload images, videos, articles.
    Utilized Wicked PDF to seamlessly convert various file formats like PSD, AI, PDF, TIFF, and WEBP into
    images, simplifying the upload process for users and knowledge, where learning is an essential part
    of what we do.`,
    role: `Shrine: Employed Shrine for efficient and reliable image uploading capabilities.
    Ruby on Rails: Backend of the application is build in ROR
    Twillio: Consume twillio api to create chat application in rails app using action cable
    Reactjs: Use reactJs library on the frontend spectrum to build responsive and dynamic UI
    Elastic Search: Use elastic search for make searching fast and effecient
    Administrate: Integrated Administrate for an effective and intuitive admin panel, simplifying the
    management of the platform.
    Devise: Incorporated Devise for secure and robust authentication features.
    Pundit: Leveraged Pundit for handling authorization and access control within the application.
    S3 Bucket: Utilized an S3 bucket for secure and scalable storage of data and assets.
    Heroku: Hosted the application on Heroku, ensuring seamless deployment and scaling to meet
    the platform's demands.`,
    type: 'Web Development',
    src: web
  },
  {
    title: 'Nzero',
    description: `nZero is a real-time carbon data and sustainability platform that gives organizations, NGOs, and
    governments the insights they need to make data driven decisions.
    My responsibilities are to implement Currency Conversion, Localization took a part in development
    phase of every feature`,
    role: `Active storage: Employed Shrine for efficient and reliable image uploading capabilities.
    Stripe: Implement stripe Api for payments and transactions
    Elastic Search: Use elastic search for make searching fast and effecient
    Graphiti: Implement graphiti to make Api calls and fetch data from backend
    reactJs: use tailwind and chartjs to make charts
    Money: use Money gem to implement currency conversion feature in the application
    Active Admin: Integrated Active Admin for an effective and intuitive admin panel, simplifying the
    management of the platform.
    Devise: Incorporated Devise for secure and robust authentication features.
    Pundit: Leveraged Pundit for handling authorization and access control within the application.
    S3 Bucket: Utilized an S3 bucket for secure and scalable storage of data and assets.
    Heroku: Hosted the application on Heroku, ensuring seamless deployment and scaling to meet
    the platform's demands.`,
    type: 'Web Development',
    src: web
  },
  {
    title: 'To Market',
    description: `It is an ecommerce application its backend is in rails and use graphql for Api calls and at the
    frontend spectrum using angular and deployed on AWS. implement subscription feature for
    payment and use stripe for payment, pundit for authorization, devise for authentication. Place orders
    Connect with vendors`,
    role: `Ruby on Rails: Backend of the application is build in ROR
    GraphQL: It is used for api calling
    Stripe: implement subscription feature for payment and use stripe for payment
    Ionic: use ionic for styling the application
    `,
    type: 'Web Development',
    src: web
  },
  {
    title: 'Workflow AI',
    description: `WorkflowAI automates a business process in a method in which documents, information, and tasks
    are passed among participants for action, according to a set of procedural rules`,
    role: `Python: Make backend in python
    rest framework: rest framework is looking for
    Reactjs: Use reactJs library on the frontend spectrum to build responsive and dynamic UI
    MongoDb: Use nosql MongoDB for storing data
    AWS: Deployment is on AWS S3`,
    type: 'Web Development',
    src: web
  },
  {
    title: 'Editor Application',
    description: `Live Editor just like canva and Create aesthetically appealing forms with the Workflow AI drag-anddrop editing functionality, and includes all of the necessary components like add media, send email
    button, signature, textbox, date elements etc`,
    role: `Python: Make backend in python
    rest framework: rest framework is looking for
    Reactjs: Use reactJs library on the frontend spectrum to build responsive and dynamic UI
    MongoDb: Use nosql MongoDB for storing data
    AWS: Deployment is on AWS S3`,
    type: 'Web Development',
    src: web
  },
  {
    title: 'Arrow Search Engine',
    description: `Arrow Search engine is an independent Google alternative that also lets you search and browse the
    web, but we don't track your searches or browsing history`,
    role: `Flask: Make backend in python
    Googe search Api: integrate google search api to fetch the data from google if not found in our
    server/DBs.
    Reactjs: Use reactJs library on the frontend spectrum to build responsive and dynamic UI
    Mysql: Use nosql MongoDB for storing data
    heroku: Deploy the application on heroku`,
    type: 'Web Development',
    src: web
  },
  {
    title: 'Ternoa WEB 3.0',
    description: `Ternoa is Web 3.0 based NFT plateforms where you can sell, purchase and even rented out NFT`,
    role: `-With Ternoa, we’ve developed pallets that fulfill advanced NFT needs. When creating an NFT on Ternoa,
    creators set their royalties when minting. Once the NFT is sold, they will automatically receive their royalty
    payment
    -Ternoa provides a marketplace where users can buy, sell, and trade NFTs, including time capsules. This
    marketplace enables creators to monetize their content and allows collectors to acquire unique and valuable
    digital assets.
    -The platform leverages blockchain technology for decentralized and secure storage of time capsules. This
    ensures data integrity and reduces the risk of centralized data breaches.
    -Ternoa has its native token called "CAPS" that plays a vital role in the ecosystem. It can be used for
    purchasing and minting NFTs, participating in platform governance, and accessing premium features`,
    type: 'Web Development',
    src: web
  },
  {
    title: 'FBA (Fulfillment by amazon)',
    description: `Fulfillment by Amazon (FBA) is a service that allows you to outsource order fulfillment to Amazon.
      The Selling Partner API for FBA Inventory lets you programmatically retrieve information about inventory in Amazon's fulfillment network.`,
    role: 'My role was to manage incoming and outgoing inventory for Amazon using SPAPI and Manage statistics on the web',
    type: 'Web Development',
    src: web
  },
  {
    title: 'Bwd (Blue Warehouse Discounts)',
    description: `Bwd is a business offering discount pricing on a variety of closeout and everyday items. 
    Customers can reserve products through the app before going to the store and can also pay for them through the app if they want quick delivery.`,
    role: `My role was to work as a full-stack developer (MERN), creating APIs for data fetching and displaying products on the frontend.`,
    type: 'App Development',
    src: app
  },
  {
    title: 'Amz Ascension',
    description: `Amz Ascension is a tool that displays Amazon product advertising campaign data,
      including the following statistics: sales, total advertising costs for a product, total sales, the percentage of total sales,
      total clicks, cost per click, profit and loss presented through numerical data and graphical representations.`,
    role: `My role was to run background jobs, synchronize all product advertising data in the database on a daily basis,
    and implement an API that calculates statistics to display both graphically and numerically.`,
    type: 'Web Development',
    src: tool
  },
  {
    title: 'Roney Innovations',
    description: `Roney Innovations is an FBA (Fulfillment by Amazon) management tool that also handles incoming and outgoing inventory, 
    manages products on the Amazon store, and handles the post-shipment flow using SpApi`,
    role: `My role was to work as a full-stack developer (MERN), creating APIs for data fetching, SpApis configurations and displaying products on the frontend.`,
    type: 'Web Development',
    src: web
  },
  {
    title: 'Inframent',
    description: `The Inframent mobile app is developed for workers to manage their work through the app. 
    A cadastral map is used to track their live location. If a worker completes some work, 
    they can attach a photo of that work so the admin can monitor work progress`,
    role: `My role was to work as a frontend developer to manage and integrate the UI process.`,
    type: 'App Development',
    src: app
  },
]