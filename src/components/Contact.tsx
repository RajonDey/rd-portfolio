import EarthCanvas from "./EarthCanvas";

export default function Contact() {
  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Side: Contact Information */}
          <div className="bg-accent text-white p-8 py-12 rounded-lg shadow-md">
            <p className="text-lg text-white uppercase tracking-wider">
              If you have any projects in mind!
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact.</h2>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold">Email</h4>
                <p className="text-white">contact@rajondey.com</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold">WhatsApp</h4>
                <a
                  href="https://wa.me/8801737997143"
                  className="text-white hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chat on WhatsApp
                </a>
              </div>
              <div>
                <h4 className="text-lg font-semibold">Location</h4>
                <p className="text-white">Sylhet, Bangladesh</p>
              </div>
            </div>
          </div>

          {/* Right Side: Earth Canvas */}
          <div className="h-[400px] md:h-[500px]">
            <EarthCanvas />
          </div>
        </div>
      </div>
    </section>
  );
}
