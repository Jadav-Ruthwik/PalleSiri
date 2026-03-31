import React, { useState } from "react";

export default function App() {
  const [lang, setLang] = useState("en");

  const whatsappNumber = "917036798322";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  const text = {
    en: {
      home: "Home",
      about: "About",
      products: "Products",
      contact: "Contact",
      heroTitle: "Fresh Milk from Village to Your Doorstep",
      heroSub: "100% Pure • No Adulteration • Direct from Farmers",
      orderBtn: "Order on WhatsApp",
      aboutTitle: "About Us",
      aboutDesc:
        "PalleSiri Dairy Farm delivers fresh milk and dairy products directly from village farmers. Our cows are naturally fed, and we ensure zero chemicals or adulteration. Pure taste, straight from the farm.",
      productsTitle: "Our Products",
      orderNow: "Order Now",
      location: "Our Location",
      viewMap: "View on Google Maps",
      contactTitle: "Contact Us",
      contactDesc: "Call or WhatsApp to place orders",
      owner: "Founder, PalleSiri Dairy Farm",
    },
    te: {
      home: "హోమ్",
      about: "మా గురించి",
      products: "ఉత్పత్తులు",
      contact: "సంప్రదించండి",
      heroTitle: "గ్రామం నుండి మీ ఇంటి వరకు తాజా పాలు",
      heroSub: "100% స్వచ్ఛమైనది • కల్తీ లేదు • రైతుల నుండి నేరుగా",
      orderBtn: "వాట్సాప్‌లో ఆర్డర్ చేయండి",
      aboutTitle: "మా గురించి",
      aboutDesc:
        "పల్లెసిరి డెయిరీ ఫారం గ్రామ రైతుల నుండి నేరుగా తాజా పాలు మరియు పాల ఉత్పత్తులను అందిస్తుంది.",
      productsTitle: "మా ఉత్పత్తులు",
      orderNow: "ఇప్పుడు ఆర్డర్ చేయండి",
      location: "మా స్థానం",
      viewMap: "మ్యాప్‌లో చూడండి",
      contactTitle: "సంప్రదించండి",
      contactDesc: "ఆర్డర్ చేయడానికి కాల్ లేదా వాట్సాప్ చేయండి",
      owner: "స్థాపకుడు",
    },
    hi: {
      home: "होम",
      about: "हमारे बारे में",
      products: "उत्पाद",
      contact: "संपर्क करें",
      heroTitle: "गाँव से आपके घर तक ताज़ा दूध",
      heroSub: "100% शुद्ध • बिना मिलावट • सीधे किसानों से",
      orderBtn: "व्हाट्सएप पर ऑर्डर करें",
      aboutTitle: "हमारे बारे में",
      aboutDesc:
        "पल्लेसिरी डेयरी फार्म गाँव के किसानों से सीधे ताज़ा दूध और डेयरी उत्पाद प्रदान करता है।",
      productsTitle: "हमारे उत्पाद",
      orderNow: "अभी ऑर्डर करें",
      location: "हमारा स्थान",
      viewMap: "मैप पर देखें",
      contactTitle: "संपर्क करें",
      contactDesc: "ऑर्डर के लिए कॉल या व्हाट्सएप करें",
      owner: "संस्थापक",
    },
  };

  const products = [
    { name: "Milk", price: "₹60/Litre", img: "/milk.jpg" },
    { name: "Curd", price: "₹70/Kg", img: "/curd.jpg" },
    { name: "Paneer", price: "₹350/Kg", img: "/paneer.jpg" },
    { name: "Ghee", price: "₹900/Litre", img: "/ghee.jpg" },
    { name: "Buttermilk", price: "₹30/Litre", img: "/buttermilk.jpg" },
  ];

  return (
    <div className="font-sans text-left overflow-x-hidden">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 shadow-md">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="PalleSiri Logo" className="h-20" />
          <h1 className="text-2xl font-bold text-green-700">PalleSiri Dairy</h1>
        </div>

        <div className="space-x-4 flex items-center">
          <a href="#home">{text[lang].home}</a>
          <a href="#about">{text[lang].about}</a>
          <a href="#products">{text[lang].products}</a>
          <a href="#contact">{text[lang].contact}</a>

          {/* ✅ FIXED Language Selector ONLY */}
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            className="border rounded px-2 py-1 max-w-[80px] text-sm"
          >
            <option value="en">EN</option>
            <option value="te">తెలుగు</option>
            <option value="hi">हिंदी</option>
          </select>
        </div>
      </nav>

      {/* rest of your code EXACTLY SAME */}

      {/* Hero Section */}
      <section
        id="home"
        className="grid md:grid-cols-2 gap-10 items-center p-10 bg-green-50"
      >
        <div>
          <img src="/logo.png" alt="PalleSiri" className="h-20 mb-4" />
          <h2 className="text-4xl font-bold text-green-800 leading-tight">
            {text[lang].heroTitle}
          </h2>
          <p className="mt-4 text-gray-600">{text[lang].heroSub}</p>

          <a href={whatsappLink} target="_blank" rel="noreferrer">
            <button className="mt-6 px-6 py-3 bg-green-700 text-white rounded-xl hover:bg-green-800">
              {text[lang].orderBtn}
            </button>
          </a>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-lg">
          <video
            src="/farm-video.mp4"
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="p-10 text-center">
        <h2 className="text-3xl font-bold text-green-700">
          {text[lang].aboutTitle}
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-gray-600">
          {text[lang].aboutDesc}
        </p>
      </section>

      {/* Products Section */}
      <section id="products" className="p-10 bg-green-50">
        <h2 className="text-3xl font-bold text-center text-green-700">
          {text[lang].productsTitle}
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {products.map((item) => {
            const message = `Hi, I want to order ${item.name} from PalleSiri Dairy`;
            const link = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

            return (
              <div
                key={item.name}
                className="p-6 bg-white shadow-lg rounded-2xl"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-64 object-cover rounded-xl mb-3"
                />

                <h3 className="text-xl font-bold text-green-700">
                  {item.name}
                </h3>
                <p className="text-gray-600 mt-2">
                  Fresh and natural {item.name.toLowerCase()} directly from
                  farm.
                </p>
                <p className="mt-2 font-semibold text-green-800">
                  {item.price}
                </p>

                <a href={link} target="_blank">
                  <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg">
                    {text[lang].orderNow}
                  </button>
                </a>
              </div>
            );
          })}
        </div>
      </section>

      {/* Location + Owner Section */}
      <section className="p-10 bg-white">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          {/* Location */}
          <div className="p-6 shadow rounded-xl">
            <h3 className="text-xl font-bold text-green-700 mb-2">
              {text[lang].location}
            </h3>
            <p className="text-gray-700">
              Rajaram Thanda, Turkawadgaon, Telangana 502286
            </p>
            <a
              href="https://maps.app.goo.gl/TYBu824FGR6BeCZT9"
              target="_blank"
              className="text-green-600 underline mt-2 inline-block"
            >
              {text[lang].viewMap}
            </a>
          </div>

          {/* Owner */}
          <div className="flex items-center justify-between p-6 shadow rounded-xl">
            <div>
              <h3 className="text-xl font-bold text-green-700">
                Rathod Venkatesh
              </h3>
              <p className="text-gray-600">{text[lang].owner}</p>
            </div>

            <img
              src="/owner.png"
              alt="Owner"
              className="h-60 w-60 object-cover rounded-full"
            />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="p-10 text-center">
        <h2 className="text-3xl font-bold text-green-700">
          {text[lang].contactTitle}
        </h2>
        <p className="mt-4 text-gray-600">{text[lang].contactDesc}</p>

        <div className="mt-4 text-gray-700">
          <p>
            <strong>Owner:</strong> Rathod Venkatesh
          </p>
          <p>
            <strong>Mobile:</strong> +91 70367 98322
          </p>
          <p>
            <strong>Email:</strong> pallesiridairy@gmail.com
          </p>
        </div>

        <a href={whatsappLink} target="_blank" rel="noreferrer">
          <button className="mt-6 px-6 py-3 bg-green-700 text-white rounded-xl hover:bg-green-800">
            Chat on WhatsApp
          </button>
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center p-4 bg-green-700 text-white">
        © 2026 PalleSiri Dairy Farm • Fresh & Pure <br />
        Contact: +91 70367 98322 | pallesiridairy@gmail.com
      </footer>
    </div>
  );
}
