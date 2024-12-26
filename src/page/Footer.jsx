import React from 'react';

const Footer = () => {
    return (
        <div>
            {/* Your website content here */}
           

            <footer style={footerStyle}>
                <p>
                    <p>
                        Welcome to Our KAIRA Website</p>&copy; 2024 My KAIRA. All rights reserved.</p>
                <p>
                    <a href="/privacy" style={linkStyle}>Privacy Policy</a> | <a href="/terms" style={linkStyle}>Terms of Service</a>
                </p>
            </footer>
        </div>
    );
};

// Inline styles for JSX (JS objects for styles)
const footerStyle = {
    backgroundColor: '#333',
    color: 'white',
    textAlign: 'center',
    padding: '10px 0',
    width: '100%',
    marginTop: 'auto', // Makes sure footer is at the bottom
};

const linkStyle = {
    color: 'white',
    textDecoration: 'none',
};

export default Footer;
