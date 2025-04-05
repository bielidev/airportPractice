export const Home = () => {
  return (
    <main className="bg-white text-black">
      <header>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="mb-6">
            <img src="/logo.png" alt="Company Logo" className="mx-auto h-50" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Welcome to AeroWatch</h1>
          <p className="text-lg mb-6">
            Your one-stop solution for all your needs. Fast, reliable, and
            efficient.
          </p>
        </div>
      </header>
      <section>
        <div className="max-w-7xl mx-auto px-6 text-center mb-5">
          <h2 className="text-3xl font-semibold mb-12">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-white border border-black rounded-lg p-8 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Fast & Reliable</h3>
              <p>
                We ensure the fastest delivery of services with the highest
                reliability.
              </p>
            </div>
            <div className="bg-white border border-black rounded-lg p-8 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Affordable Prices</h3>
              <p>
                Our services are priced competitively, giving you the best value
                for your money.
              </p>
            </div>
            <div className="bg-white border border-black rounded-lg p-8 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p>
                We offer round-the-clock customer support to assist you whenever
                you need it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 pb-auto">
        <div className="max-w-7xl mx-auto px-6 text-center ">
          <h2 className="text-3xl font-semibold mb-12">
            What Our Customers Say
          </h2>
          <div className="flex flex-wrap justify-center space-x-6 pb-6">
            <div className="bg-white border border-black rounded-lg p-6 w-80 shadow-sm">
              <p className="text-lg mb-4">
                "This service exceeded my expectations. The speed and customer
                support are exceptional!"
              </p>
              <p className="font-semibold">Taylor Swift</p>
              <p className="text-gray-500">Popstar Singer</p>
            </div>
            <div className="bg-white border border-black rounded-lg p-6 w-80 shadow-sm">
              <p className="text-lg mb-4">
                "I have never experienced such reliability. Highly recommend for
                anyone looking for quality service."
              </p>
              <p className="font-semibold">Tim Cook</p>
              <p className="text-gray-500">CEO, Apple, Inc</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
