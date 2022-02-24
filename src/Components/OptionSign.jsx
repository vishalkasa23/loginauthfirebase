import React from 'react';
import {Link} from 'react-router-dom'
import '../App.css'

const OptionSign = () => (
    <section className="button">
                   <nav><Link to="/Sign">
                        <button>
                        Sign In
                        </button>
                    </Link>
                    </nav>
    </section>
)
export default OptionSign;