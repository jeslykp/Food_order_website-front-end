import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Footer() {
  const footerLinks = [
    { label: "Our company", to: "/company" },
    { label: "Jobs", to: "/jobs" },
    { label: "Terms and Conditions", to: "/terms" },
    { label: "Frequently Asked Questions", to: "/faq" },
    { label: "Site privacy", to: "/privacy" },
    { label: "Contact us", to: "/contact" },
    { label: "Site map", to: "/sitemap" },
  ];
  return (
    <Box component="footer" className="bg-black text-white py-6 px-6 md:px-20 ">
      <Box className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {footerLinks.map((link) => (
          <div
            key={link.label}
            to={link.to}
            className="text-gray-400 hover:text-white text-sm"
          >
            {link.label}
          </div>
        ))}
      </Box>
      <Box className="border-t border-gray-700 pt-4 flex flex-col md:flex-row items-center justify-between">
        <Typography variant="body2">
          For assistance, you can contact us via live chat.
        </Typography>
        <Typography variant="body2" className="mt-2 md:mt-0">
          © 2025 talabat.com
        </Typography>
      </Box>
    </Box>
  );
}
