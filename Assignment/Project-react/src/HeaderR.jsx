import React from 'react'
import { Link } from 'react-router-dom'

function HeaderR() {
    return (
           <>
                <nav>
                    <div className='contaner1'>
                          <div className="text">
                            <span><img src="https://finanvo.in/assets/logo/finanvo.png" height={'30px'} width={'90px'}/></span>
                                <ul>
                                    <li>
                                        <select>
                                            <option hidden className='Comany'>COMANY</option>
                                            <option value="">New Comany</option>
                                            <option value="">Comany Report</option>
                                        </select>
                                    </li>
                                    <li>WATCHLIST</li>
                                    <li>SUBSCRIPTIONS</li>
                                    <li>
                                        <select>
                                            <option hidden>QUICK LINKS</option>
                                            <option >DIRECTOR CONTACTER</option>
                                        </select>
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="serch-bar">
                                <select name="" id="">
                                    <option>Company</option>
                                    <option>Director</option>
                                    <option>GSTIN</option>
                                    <option>Trademark</option>
                                    <option>EPFO</option>
                                    <option>Startup</option>
                                    <option>NGO</option>
                                    <option>IEC</option>
                                </select>
                                <input type="text" placeholder='Serach for a comany' />
                            </div>

                            <div className="login">
                                <Link to='/Singin' className='btn1'><i class="fa-regular fa-user"></i>&nbsp;&nbsp; LOGIN</Link>
                                <button className='btn btn-outline-primary'>GET FREE ACCOUNT</button>
                            </div>
                        </div>
                    </nav>
                 </>
    )
}

export default HeaderR