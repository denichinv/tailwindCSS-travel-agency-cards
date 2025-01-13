import Card from "./components/Card"
import './App.css'

function App() {
  
  const cards = [
    {
      title: "Winter Wonderland",
      description: "Escape to a snowy paradise and enjoy skiing, snowboarding, and cozy evenings by the fire.",
      buttonText: "Plan Your Trip",
      imageUrl: "https://www.visitlondon.com/-/media/images/london/visit/whats-on/christmas/winter-wonderland/winter-wonderland-1920.jpg?h=360&w=640&rev=91955f86c7d44b88a5b5ff6fd0f57135&hash=F74B4FA4E16BD032D9B5BA95509715ED"
    },
    {
      title: "Festive Markets",
      description: "Discover magical Christmas markets with handmade gifts, mulled wine, and holiday treats.",
      buttonText: "Explore Markets",
      imageUrl: "https://www.greatrail.com/media/37116599/Cologne-Christmas-Market_Alamy_KHXR85_900x450.jpg"
    },
    { title: "Beach Paradise",
      description: "Relax on golden sands and enjoy crystal-clear waters. Your perfect vacation awaits!",
      buttonText: "Book Now",
      imageUrl: "https://2cw.co.uk/th279/images/1+192ea2-paradise-beach-hotel-koh-samui.jpg"
    },
    {
      title: "New Year’s Eve Celebration",
      description: "Ring in the new year with dazzling fireworks, music, and unforgettable parties.",
      buttonText: "Join the Fun",
      imageUrl: "https://d3i6fh83elv35t.cloudfront.net/static/2023/12/2023-12-31T141034Z_131921122_RC2D85A9V7FW_RTRMADP_3_NEW-YEAR-AUSTRALIA-1024x683.jpg"
    },
    {
      title: "Tropical Holidays",
      description: "Trade the cold for sun, sand, and palm trees with a warm holiday getaway.",
      buttonText: "Book Now",
      imageUrl: "https://www.telegraph.co.uk/content/dam/eip/apl-media/luxury-islands/apl-islands-header-credit-getty.jpg?imwidth=680"
    },
    {
      title: "Mountain Skiing Adventure",
      description: "Experience the thrill of skiing down pristine slopes surrounded by breathtaking mountain views.",
      buttonText: "Book Your Trip",
      imageUrl: "https://www.planetware.com/wpimages/2018/10/top-ski-resorts-world-france-haute-savoie-chamonix.jpg"
    }
  ];
  

  return (
    <>
    <h1 className="font-serif m-10  p-4 rounded">Explore Our Holiday Sale Now!</h1>
    {cards.map(({ title, description, buttonText, imageUrl }, index) => (
      <Card 
        key={index} 
        title={title} 
        description={description} 
        buttonText={buttonText} 
        imageUrl={imageUrl} 
      />
    ))}
    </>
  )
}

export default App
