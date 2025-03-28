import { jsPDF } from 'jspdf';
import JsBarcode from 'jsbarcode';

export const FlightBooking = () => {
  const booking = {
    name: 'Manuel Montoya',
    flight: 'AV123',
    departure: 'Madrid',
    arrival: 'Barcelona',
    date: '2025-04-15',
    boardingTime: '10:30 AM',
    bookingNumber: 'XYZ123',
    seat: '12A',
    boardingGate: 'A22',
    boardingArea: '2',
    takeOffTime: '10:30 AM'
  };

  const generatePDF = () => {
    const doc = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });
    
    doc.setFont('Courier', 'bold');
    doc.setFontSize(16);
    doc.text('UNITED FLIGHT ' + booking.flight, 10, 15);
    doc.text(booking.departure + ' - ' + booking.arrival, 90, 15);
    
    doc.setFontSize(12);
    doc.setFont('Courier', 'normal');
    doc.text('Passenger: ' + booking.name.toUpperCase(), 10, 25);
    
    
    doc.setFontSize(20);
    doc.setFont('Courier', 'bold');
    doc.text('DEPARTURE GATE', 10, 40);
    doc.setFontSize(30);
    doc.text(booking.boardingGate, 10, 50);
    
    doc.setFontSize(20);
    doc.text('BOARDS AT', 10, 70);
    doc.setFontSize(30);
    doc.text(booking.boardingTime, 10, 80);
    
    doc.setFontSize(20);
    doc.text('BOARDING ZONE', 10, 100);
    doc.setFontSize(30);
    doc.text(booking.boardingArea, 10, 110);
    
    
    doc.setFontSize(20);
    doc.text('SEAT NUMBER', 160, 40);
    doc.setFontSize(30);
    doc.text(booking.seat, 160, 50);
    
    doc.setFontSize(20);
    doc.text('DEPARTS', 160, 70);
    doc.setFontSize(30);
    doc.text(booking.takeOffTime, 160, 80);
    
    
    const canvas = document.createElement('canvas');
    JsBarcode(canvas, booking.bookingNumber, { format: 'CODE128' });
    const barcodeDataURL = canvas.toDataURL('image/png');
    doc.addImage(barcodeDataURL, 'PNG', 10, 120, 190, 20);
    
    
    doc.setFontSize(16);
    doc.setTextColor(0, 0, 255);
    doc.text('UNITED BOARDING PASS', 80, 150);
    
    doc.save('boarding_pass.pdf');
  };

  return (
    <section className="flex flex-col items-center py-8 bg-white text-black">
      <h1 className="text-3xl font-bold mb-6">Tarjeta de Embarque</h1>
      <div className="space-y-2 text-lg">
        <p><strong>Flight:</strong> {booking.flight}</p>
        <p><strong>Departure:</strong> {booking.departure}</p>
        <p><strong>Arrival:</strong> {booking.arrival}</p>
        <p><strong>Date:</strong> {booking.date}</p>
        <p><strong>Boarding Time:</strong> {booking.boardingTime}</p>
      </div>
      <button
        onClick={generatePDF}
        className="mt-6 px-6 py-3 text-white bg-black hover:bg-gray-800 rounded-lg text-xl transition-colors duration-300"
      >
       GET BOARDING PASS
      </button>
    </section>
  );
};