import 'bootstrap/dist/css/bootstrap.min.css';
export default function Footer() {
    return (
        <footer className="footer pb-5 pt-3" style={{background: 'black', color: 'aliceblue'}}>
            <div className="container">
                <div className="row">
                    {/* First column for hours and locations */}
                    <div className="col-md-6">
                        <div>
                            <p>Open Hours</p>
                            <ul style={{ listStyleType: 'none' }}>
                                <li>Monday - Friday: 09.00 - 20.00</li>
                                <li>Saturday: 09.00 - 21.00</li>
                                <li>Sunday and Holiday: 10.00 - 21.00</li>
                            </ul>
                        </div>
                        
                    </div>
                    {/* Second column for follow us and subscription */}
                    <div className="col-md-6">
                            <p>Locations</p>
                            <ul style={{ listStyleType: 'none' }}>
                                <li>Grand Indonesia, Jakarta</li>
                                <li>Tunjungan Plaza, Surabaya</li>
                                <li>DP Mall, Semarang</li>
                            </ul>
                    </div>
                </div>
            </div>
            <hr />
            <div className="container mt-3">
                <div className="row">
                    <div className="col text-start">
                        All rights Reserved © Audia Winniar Savitri 2024
                    </div>
                    <div className="col text-end">
                        Made with ❤️ for Dibimbing Next Assignment
                    </div>
                </div>
            </div>
        </footer>
    );
}
