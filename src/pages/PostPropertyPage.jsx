import { useState } from "react";
import {useNavigate} from "react-router-dom";

export default function PostPropertyPage() {
  const navigate=useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    category: "sell",
    price: "",
    location: "",
    amenities: "",
    images: [],
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "images") {
      setFormData({ ...formData, images: files });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const { title, category, price, location, amenities, images } = formData;

    if (!title || !price || !location) {
      alert("Please fill in all the required fields.");
      return;
    }

    if (images.length === 0) {
      alert("Please select at least one image.");
      return;
    }

    const imagesArray = [];
    const readers = [];

    for (let i = 0; i < images.length; i++) {
      const file = images[i];
      const reader = new FileReader();

      readers.push(
        new Promise((resolve) => {
          reader.onload = (e) => resolve(e.target.result);
          reader.readAsDataURL(file);
        })
      );
    }

    Promise.all(readers).then((results) => {
      const newProperty = {
        title,
        category,
        price,
        location,
        amenities,
        imagesCount: results,
      };

      const properties = JSON.parse(localStorage.getItem("properties")) || [];
      properties.push(newProperty);
      localStorage.setItem("properties", JSON.stringify(properties));

      alert("✅ Property posted successfully!");
      setFormData({
        title: "",
        category: "sell",
        price: "",
        location: "",
        amenities: "",
        images: [],
      });
      document.getElementById("images").value = null; // reset file input

      navigate("/history")
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#DDA15E] bg-[url('/post.jpg')] bg-cover bg-center bg-black/40 bg-blend-multiply">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md md:w-[600px] p-4 h-auto md:p-6">
        <h1 className="flex justify-center font-bold text-[#BC6C25] text-lg md:text-2xl">
          Post Your Property
        </h1>

        <form
          className="flex flex-col gap-3 md:gap-4 p-2 md:p-4"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-2">
            <p className="text-[#BC6C25]">Property Title</p>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="eg. 2BHK Apartment in Delhi"
              className="border-2 rounded-lg w-full p-2 border-[#BC6C25]"
            />

            <p className="text-[#BC6C25]">Category</p>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="border-2 w-full rounded-lg p-2 border-[#BC6C25]"
            >
              <option value="sell">For Sale</option>
              <option value="rent">For Rent</option>
            </select>

            <p className="text-[#BC6C25]">Price (₹)</p>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="eg. 50,00,000"
              className="border-2 w-full rounded-xl p-2 border-[#BC6C25]"
            />

            <p className="text-[#BC6C25]">Location</p>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="City, Area"
              className="border-2 rounded-xl w-full p-2 border-[#BC6C25]"
            />

            <p className="text-[#BC6C25]">Amenities</p>
            <input
              type="text"
              name="amenities"
              value={formData.amenities}
              onChange={handleChange}
              placeholder="eg. Parking, Lift, Security, Swimming Pool"
              className="border-2 rounded-xl p-2 w-full border-[#BC6C25]"
            />

            <p className="text-[#BC6C25]">
              Upload Images (you can only upload up to 3 images)
            </p>
            <input
              type="file"
              id="images"
              name="images"
              multiple
              onChange={handleChange}
              className="border-2 p-2 rounded-xl w-full border-[#BC6C25]"
            />

            <button
              type="submit"
              className="p-2 w-full md:w-1/2 mx-auto rounded-xl bg-[#BC6C25] text-white hover:bg-[#DDA15E] shadow-lg"
            >
              Post Property
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}