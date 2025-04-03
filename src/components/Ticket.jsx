import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";
import { QRCodeSVG } from "qrcode.react";

export default function Ticket({ isSizeFixed = false }) {
  const ticketNumber = `#${(Math.random() * 1000).toFixed().toString()}`;

  const currentTicketStyles = {
    background: "bg-[#4A90E2]/80",
    borders: {
      outside: "border-2",
      inside: "border-4",
    },
    shadowColor: "shadow-md",
  };

  const name = "Manuel Montoya";
  const flight = "AV123";
  const departure = "Madrid";
  const arrival = "Barcelona";
  const date = "2025-04-15";
  const boardingTime = "10:30 AM";
  const bookingNumber = "XYZ123";
  const seat = "12A";
  const boardingGate = "A22";
  const boardingArea = "2";
  const takeOffTime = "10:30 AM";

  return (
    <div
      className={cn(
        "block h-full overflow-hidden p-5",
        isSizeFixed ? "aspect-[2/1]" : "aspect-none w-full md:aspect-[2/1]"
      )}
    >
      <div
        className={cn(
          "relative h-full overflow-hidden border rounded-[40px]",
          isSizeFixed ? "flex" : "grid md:flex",
          currentTicketStyles.background,
          currentTicketStyles.borders.inside
        )}
      >
        <div className="absolute top-4 right-4">
          <img src={logo} alt="Logo" className="h-36 w-auto" />
        </div>

        <div className="absolute w-1/2 rotate-45 h-[300%] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-[#41b3ff00] via-[#b0a9ff13] to-[#41b3ff00]"></div>
        <span
          className={cn(
            "h-full font-mono text-center text-white font-bold",
            isSizeFixed
              ? "ticket-dash-border px-4 text-3xl py-0 leading-none [writing-mode:vertical-lr]"
              : "ticket-dash-border-top row-[3/4] px-4 py-4 md:py-0 text-4xl md:px-4 md:text-3xl md:[writing-mode:vertical-lr] md:ticket-dash-border"
          )}
        >
          {ticketNumber}
        </span>

        <div
          className={cn(
            "z-10 grid w-full grid-rows-2 md:grid-rows-1",
            isSizeFixed
              ? "h-full pd-0 grid-rows-2"
              : "h-auto md:h-full pt-5 md:pt-0 grid-rows-[1fr_auto] md:grid-rows-1"
          )}
        >
          <div
            className={cn(
              "grid",
              isSizeFixed ? "grid-cols-2" : "md:grid-cols-2"
            )}
          >
            <div className="flex flex-col">
              <NotAvatarUser
                isSizeFixed={isSizeFixed}
                name={name}
                flight={flight}
                departure={departure}
                arrival={arrival}
              />
              <section class="flex flex-1 flex-col items-center justify-center mb-26">
                <div className="p-2 bg-white rounded-lg">
                  <QRCodeSVG
                    value="https://github.com/bielidev?tab=repositories"
                    size={120}
                  />
                </div>
              </section>
            </div>
            <div
              className={cn(
                "flex flex-col items-center justify-center p-5 text-white",
                `${"flex"} md:flex-row`
              )}
            >
              <div className="text-center mb-4 md:mb-0">
                <p className="text-3xl font-bold">{flight}</p>
                <p className="text-xl">
                  {departure} → {arrival}
                </p>
                <p className="text-lg mt-2">{date}</p>
                <p className="text-lg mt-2">{boardingTime} - Boarding Time</p>
              </div>
            </div>
          </div>
        </div>

        <div
          className={cn(
            "absolute bottom-0 w-full flex justify-between items-center text-white p-6",
            isSizeFixed ? "grid grid-cols-2" : "md:grid-cols-2"
          )}
        >
          <div>
            <p className="text-sm font-bold">Booking Number: {bookingNumber}</p>
            <p className="text-sm font-bold">Seat: {seat}</p>
            <p className="text-sm font-bold">Gate: {boardingGate}</p>
            <p className="text-sm font-bold">Boarding Area: {boardingArea}</p>
          </div>
          <div>
            <p className="text-sm font-bold">Takeoff Time: {takeOffTime}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const NotAvatarUser = ({ isSizeFixed, name, flight, departure, arrival }) => {
  return (
    <section
      className={cn(
        "flex items-start justify-start gap-4 text-white gap-y-2",
        isSizeFixed
          ? "items-start flex-row p-6 text-left"
          : "p-5 flex-col md:items-start md:flex-row md:p-6 items-center text-center md:text-left"
      )}
    >
      <div>
        <p className="text-xl font-bold">{name}</p>
        <span className="block text-sm font-normal w-max text-white/60">
          {`Flight: ${flight}`}
        </span>
        <span className="block text-sm font-normal w-max text-white/60">
          {`Departure: ${departure} | Arrival: ${arrival}`}
        </span>
      </div>
    </section>
  );
};
