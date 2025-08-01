import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactInfo() {
  const contactItems = [
    {
      icon: <MapPin className="text-[#B88C3A]" size={28} />,
      title: "Visit Our Store",
      details: [
        "Address: P.O. Box 2",
        "Walewale",
        "Northern Region, Ghana.",
      ],
    },
    {
      icon: <Phone className="text-[#B88C3A]" size={28} />,
      title: "Call  or WhatsApp",
      details: ["+233 24 275 2362", "+233 20 139 7830"],
    },
    {
      icon: <Mail className="text-[#B88C3A]" size={28} />,
      title: "Email Us",
      details: ["ephissheabutter@yahoo.com", "abigailaheto17@gmail.com"],
    },
    {
      icon: <Clock className="text-[#B88C3A]" size={28} />,
      title: "Business Hours",
      details: [
        "Monday - Friday: 9:00 AM - 6:00 PM",
        "Saturday: 10:00 AM - 4:00 PM",
        "Sunday: Closed",
      ],
    },
  ];

  return (
    <div className="max-w-3xl mx-auto space-y-6 py-8 px-4">
      {contactItems.map((item, index) => (
        <div
          key={index}
          className="flex items-start gap-4 p-5 rounded-xl bg-white shadow-sm border border-gray-100"
        >
          <div className="bg-[#FFF6E7] rounded-full p-3">{item.icon}</div>
          <div>
            <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
            {item.details.map((line, i) => (
              <p key={i} className="text-gray-600">
                {line}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

