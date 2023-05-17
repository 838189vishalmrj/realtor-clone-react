import { useState } from "react";

export default function CreateListing() {
  const [formData, setFormData] = useState({
    type: "rent",
    name: "",
    bedrooms: 1,
    bathrooms: 1,
    parking: false,
    furnished: false,
    address: "",
    description: "",
    offer: false,
    regularPrice: 0,
    discountedPrice: 0,
  });

  const {
    type,
    name,
    bedrooms,
    bathrooms,
    parking,
    furnished,
    address,
    offer,
    description,
    regularPrice,
    discountedPrice,
  } = formData;

  function onChange() {}
  return (
    <main className="max-w-md px-2 mx-auto">
      <h1 className="text-center text-3xl font-bold mt-6">Create a Listing</h1>
      <form>
        <p className="text-lg mt-6 font-semibold">Sell/Rent</p>
        <div className="flex">
          <button
            type="button"
            id="type"
            value="sale"
            onClick={onChange}
            className={`mr-3 px-7 py-3 font-medium text-sm uppercase border-s-fuchsia-900
                shadow-md w-full rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out ${
                  type === "rent"
                    ? "bg-white text-black"
                    : "bg-slate-600 text-white"
                }`}
          >
            sell
          </button>
          <button
            type="button"
            id="type"
            value="sale"
            onClick={onChange}
            className={`ml-3 px-7 py-3 font-medium text-sm uppercase border-s-fuchsia-900
                shadow-md w-full rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out ${
                  type === "sell"
                    ? "bg-white text-black"
                    : "bg-slate-600 text-white"
                }`}
          >
            rent
          </button>
        </div>

        <p className="text-lg font-semibold mt-6">Name</p>
        <input
          type="text"
          id="name"
          placeholder="Name"
          value={name}
          onChange={onChange}
          maxLength={"30"}
          minLength={"10"}
          required
          className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"
        />
        <div className="flex space-x-6 mb-6">
          <div>
            <p className="text-lg font-semibold">Beds</p>
            <input
              type="number"
              id="bedrooms"
              value={bedrooms}
              onChange={onChange}
              min={1}
              max={50}
              required
              className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 text-center"
            />
          </div>
          <div>
            <p className="text-lg font-semibold">Baths</p>
            <input
              type="number"
              id="bathrooms"
              value={bathrooms}
              onChange={onChange}
              min={1}
              max={50}
              required
              className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 text-center"
            />
          </div>
        </div>

        {/* parking spot */}

        <p className="text-lg mt-6 font-semibold">Parking</p>
        <div className="flex">
          <button
            type="button"
            id="parking"
            value={true}
            onClick={onChange}
            className={`mr-3 px-7 py-3 font-medium text-sm uppercase border-s-fuchsia-900
                shadow-md w-full rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out ${
                  !parking ? "bg-white text-black" : "bg-slate-600 text-white"
                }`}
          >
            Yes
          </button>
          <button
            type="button"
            id="parking"
            value={false}
            onClick={onChange}
            className={`ml-3 px-7 py-3 font-medium text-sm uppercase border-s-fuchsia-900
                shadow-md w-full rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out ${
                  parking ? "bg-white text-black" : "bg-slate-600 text-white"
                }`}
          >
            No
          </button>
        </div>
        <p className="text-lg mt-6 font-semibold">Furnished</p>
        <div className="flex">
          <button
            type="button"
            id="furnished"
            value={true}
            onClick={onChange}
            className={`mr-3 px-7 py-3 font-medium text-sm uppercase border-s-fuchsia-900
                shadow-md w-full rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out ${
                  !furnished ? "bg-white text-black" : "bg-slate-600 text-white"
                }`}
          >
            Yes
          </button>
          <button
            type="button"
            id="furnished"
            value={false}
            onClick={onChange}
            className={`ml-3 px-7 py-3 font-medium text-sm uppercase border-s-fuchsia-900
                shadow-md w-full rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out ${
                  furnished ? "bg-white text-black" : "bg-slate-600 text-white"
                }`}
          >
            No
          </button>
        </div>
        <p className="text-lg font-semibold mt-6">Address</p>
        <textarea
          type="text"
          id="address"
          placeholder="Address"
          value={address}
          onChange={onChange}
          required
          className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"
        />
        <p className="text-lg font-semibold">Description</p>
        <textarea
          type="text-aea"
          id="description"
          placeholder="Description"
          value={description}
          onChange={onChange}
          required
          className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"
        />
        <p className="text-lg font-semibold">Offer</p>
        <div className="flex">
          <button
            type="button"
            id="offer"
            value={true}
            onClick={onChange}
            className={`mr-3 px-7 py-3 font-medium text-sm uppercase border-s-fuchsia-900
                shadow-md w-full rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out ${
                  !offer ? "bg-white text-black" : "bg-slate-600 text-white"
                }`}
          >
            Yes
          </button>
          <button
            type="button"
            id="offer"
            value={false}
            onClick={onChange}
            className={`ml-3 px-7 py-3 font-medium text-sm uppercase border-s-fuchsia-900
                shadow-md w-full rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out ${
                  offer ? "bg-white text-black" : "bg-slate-600 text-white"
                }`}
          >
            No
          </button>
        </div>

        <div className="flex items-center mt-6 mb-6">
          <div className="">
            <p className="text-lg font-semibold">Regular Price</p>
            <div className="w-full flex justify-center items-center  space-x-6">
              <input
                type="number"
                id="regularPrice"
                value={regularPrice}
                onChange={onChange}
                min={40}
                max={400000}
                required
                className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 text-center"
              />
              {type === "rent" && (
                <div>
                  <p className="text-md w-full whitespace-nowrap">$ / Month</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {offer && (
          <div className="mb-6 flex items-center">
            <div>
              <p className="text-lg font-semibold">Discounted Price</p>
              <div className="flex w-full justify-center items-center space-x-6">
                <input
                  type="number"
                  id="discountedPrice"
                  value={discountedPrice}
                  onChange={onChange}
                  min={40}
                  max={400000}
                  className="w-full py-2 px-4 text-xl text-gray-700 bg-white border border-gray-300 rounded text-center focus:border-gray-700 transition duration-150 ease-in-out focus:border-slate-600 focus:bg-white"
                />
                {type === "rent" && (
                  <div>
                    <p className="text-md w-full whitespace-nowrap">
                      $ / Month
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
        
        <div className="mb-6">
            <p className="text-lg font-semibold">Images</p>
            <p className="text-gray-600">The first image will be the cover max(6)</p>
            <input 
            type="file"
            id="images"
            onChange={onChange}
            accept=".jpg,.png,.jpeg"
            multiple
            required
            className="w-full bg-white py-2 px-4 text-gray-700 border border-gray-300 rounded transition duration-150 ease-in-out focus:bg-white focus:border-slate-300"
            />
        </div>
        <button className="mb-6 w-full px-7 py-3 uppercase bg-blue-600 rounded text-white font-medium text-sm shadow-md hover:bg-blue-700 focus:shadow-lg transition duration-150 ease-in-out active:bg-blue-800 active:shadow-lg" type="submit">Create Listing</button>
      </form>
    </main>
  );
}
