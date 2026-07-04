const Footer = () => {
    return (
        <footer className="bg-dark-brown text-[#d7ccc8] py-[60px] pb-[30px] mt-auto">
            <div className="container mx-auto px-4 text-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10 text-left hidden">
                    {/* Placeholder for footer widgets if needed later, currently hidden to match legacy simplified footer */}
                </div>

                <div className="border-t border-white/10 pt-8 mt-8">
                    <p className="text-sm opacity-70">&copy; {new Date().getFullYear()} SARV Foundation. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
