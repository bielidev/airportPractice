import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

export default function Ticket({ isSizeFixed = false }) {
  const ticketNumber = `#${(Math.random() * 100).toFixed().toString()}`;

  const currentTicketStyles = {
    background: "bg-[#4A90E2]/80",
    borders: {
      outside: "border-2",
      inside: "border-4",
    },
    shadowColor: "shadow-md",
  };

  return (
    <div
      className={cn(
        "block h-full overflow-hidden opacity-100 rounded-[60px] shadow-[inset_0_4px_30px] bg-transparent border p-5",
        isSizeFixed
          ? "aspect-[2/1] w-full"
          : "aspect-none w-full md:aspect-[2/1]",
        currentTicketStyles.borders.outside,
        currentTicketStyles.shadowColor
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
        {
          <div
            className={cn(
              "-rotate-12",
              isSizeFixed
                ? "absolute bottom-[20%] left-[25%] mb-0 h-[40%] w-auto block"
                : "md:w-auto row-[2/3] mb-8 md:mb-0 left-0 mx-auto md:mx-0 h-32 md:h-[40%] relative flex justify-center w-full md:block bottom-0 md:left-[25%] md:bottom-[20%]  md:absolute"
            )}
          ></div>
        }
        <div
          className={cn(
            "z-10 grid w-full grid-rows-2",
            isSizeFixed
              ? "h-full pd-0 grid-rows-2"
              : "h-auto md:h-full pt-5 md:pt-0 grid-rows-[1fr_auto] md:grid-rows-2"
          )}
        >
          <div
            className={cn(
              "grid",
              isSizeFixed ? "grid-cols-2" : "md:grid-cols-2"
            )}
          >
            <div className="h-max">
              <NotAvatarUser isSizeFixed={isSizeFixed} />
            </div>
            <div
              className={cn(
                "items-center gap-4 p-5 flex-row",
                `${"flex"} md:block flex-col-reverse md:flex-row`
              )}
            >
              <img
                src={logo}
                className={cn(
                  "order-1 h-auto w-19",
                  isSizeFixed ? "ml-auto" : " ml-0 md:ml-auto"
                )}
              />
              <time
                dateTime="2024-09-12T06:00:00"
                className={cn(
                  "block mt-2 ml-auto font-bold text-right text-white md:ml-0",
                  isSizeFixed
                    ? "text-right mr-0"
                    : "text-center mr-auto md:mr-0 md:text-right"
                )}
              >
                Mar. 20 2025
              </time>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const NotAvatarUser = ({ isSizeFixed }) => {
  return (
    <section
      className={cn(
        "flex items-end justify-start gap-4 text-white gap-y-2",
        isSizeFixed
          ? "items-start flex-row p-6 text-left"
          : "p-5 flex-col md:items-start md:flex-row md:p-6 items-center text-center md:text-left"
      )}
    >
      <div>
        <p className="text-xl font-bold">AeroWatch</p>
        <span className="block text-sm font-normal w-max text-white/60">
          Boarding pass
        </span>
      </div>
    </section>
  );
};
