import React from 'react'
import user1 from '../assests/user1.jpg'
import user2 from '../assests/user2.jpg'
import user3 from '../assests/user3.jpg'
import user4 from '../assests/user4.jpg'
// import user5 from '../assests/user5.jpg'
import user6 from '../assests/user6.jpg'
import user7 from '../assests/user7.jpg'
import user8 from '../assests/user8.jpg'
import user9 from '../assests/user9.jpg'
import user10 from '../assests/user10.jpg'

const UserManagment = () => {
  return (
    <div>
    <div class="WrapperArea">
        <div class="WrapperBox">
            <div class="Small-Wrapper">
                <h4 class="Title">User Management</h4>
                <div class="TableList">
                    <table>
                        <thead>
                            <tr>
                                <th>S.No</th> 
                              <th>Profile</th> 
                                <th>Name</th> 
                                <th>Email </th>
                                <th>Mobile</th>
                                <th>Address</th> 
                                <th>Total orders </th> 
                                <th>action</th>
                            </tr>
                        </thead>
                        <tbody> 
                            <tr>
                                <td>1</td>
                               <td>
                                    <figure><img src={user1} alt=''/></figure>
                                </td>
                                <td>Lauren Molive</td>
                                <td>lauren@gmail.com</td>
                                <td>+91 9876543210</td>
                                <td>H-146/147 Noida sector-63, U.P-201301</td>
                                <td>25</td>
                                <td> 
                                    <a class="Red" href="/" data-toggle="modal" data-target="#DeleteModal">
                                        <i class="fa fa-trash"></i>
                                    </a>                                 
                                </td>     
                            </tr>
                            <tr>
                                <td>2</td>
                              <td>
                                    <figure><img src={user2} alt= ''/></figure>
                                </td>
                                <td>Jaques Amole</td>
                                <td>Jaques@gmail.com</td>
                                <td>+91 9876543210</td>
                                <td>H-146/147 Noida sector-63, U.P-201301</td>
                                <td>15</td>
                                <td> 
                                    <a class="Red" href="/" data-toggle="modal" data-target="#DeleteModal">
                                        <i class="fa fa-trash"></i>
                                    </a>                                 
                                </td>     
                            </tr>
                            <tr>
                                <td>3</td>
                               <td>
                                    <figure><img src={user3}alt=''/></figure>
                                </td> 
                                <td>Val Adictorian</td>
                                <td>Adictorian@gmail.com</td>
                                <td>+91 9876543210</td>
                                <td>H-146/147 Noida sector-63, U.P-201301</td>
                                <td>18</td>
                                <td> 
                                    <a class="Red" href="/" data-toggle="modal" data-target="#DeleteModal">
                                        <i class="fa fa-trash"></i>
                                    </a>                                 
                                </td>     
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>
                                    <figure><img src={user4} alt=''/></figure>
                                </td>
                                <td>Marsha Mello</td>
                                <td>Marsha@gmail.com</td>
                                <td>+91 9876543210</td>
                                <td>H-146/147 Noida sector-63, U.P-201301</td>
                                <td>12</td>
                                <td> 
                                    <a class="Red" href="/" data-toggle="modal" data-target="#DeleteModal">
                                        <i class="fa fa-trash"></i>
                                    </a>                                 
                                </td>     
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>
                                    <figure><img src={user6} alt=''/></figure>
                                </td>
                                <td>Carol Sell</td>
                                <td>Carol@gmail.com</td>
                                <td>+91 9876543210</td>
                                <td>H-146/147 Noida sector-63, U.P-201301</td>
                                <td>08</td>
                                <td> 
                                    <a class="Red" href="/" data-toggle="modal" data-target="#DeleteModal">
                                        <i class="fa fa-trash"></i>
                                    </a>                                 
                                </td>     
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>
                                    <figure><img src={user6} alt=''/></figure>
                                </td> 
                                <td>Minnie Strone</td>
                                <td>Minnie@gmail.com</td>
                                <td>+91 9876543210</td>
                                <td>H-146/147 Noida sector-63, U.P-201301</td>
                                <td>05</td>
                                <td> 
                                    <a class="Red" href="/" data-toggle="modal" data-target="#DeleteModal">
                                        <i class="fa fa-trash"></i>
                                    </a>                                 
                                </td>     
                            </tr>
                            <tr>
                                <td>7</td>
                              <td>
                                    <figure><img src={user7} alt=''/></figure>
                                </td>
                                <td>Cody Pendant</td>
                                <td>Pendant@gmail.com</td>
                                <td>+91 9876543210</td>
                                <td>H-146/147 Noida sector-63, U.P-201301</td>
                                <td>17</td>
                                <td> 
                                    <a class="Red" href="/" data-toggle="modal" data-target="#DeleteModal">
                                        <i class="fa fa-trash"></i>
                                    </a>                                 
                                </td>     
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>
                                    <figure><img src={user8} alt=''/></figure>
                                </td>
                                <td>Genie Inabottle</td>
                                <td>Inabottle@gmail.com</td>
                                <td>+91 9876543210</td>
                                <td>H-146/147 Noida sector-63, U.P-201301</td>
                                <td>11</td>
                                <td> 
                                    <a class="Red" href="/" data-toggle="modal" data-target="#DeleteModal">
                                        <i class="fa fa-trash"></i>
                                    </a>                                 
                                </td>     
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>
                                    <figure><img src={user9} alt=''/></figure>
                                </td>
                                <td>Cathy Derr</td>
                                <td>Cathy@gmail.com</td>
                                <td>+91 9876543210</td>
                                <td>H-146/147 Noida sector-63, U.P-201301</td>
                                <td>09</td>
                                <td> 
                                    <a class="Red" href="/" data-toggle="modal" data-target="#DeleteModal">
                                        <i class="fa fa-trash"></i>
                                    </a>                                 
                                </td>     
                            </tr>
                            <tr>
                                <td>10</td>
                                 <td>
                                    <figure><img src={user10} alt=''/></figure>
                                </td> 
                                <td>Mack Adamiae</td>
                                <td>Mack@gmail.com</td>
                                <td>+91 9876543210</td>
                                <td>H-146/147 Noida sector-63, U.P-201301</td>
                                <td>13</td>
                                <td> 
                                    <a class="Red" href="/" data-toggle="modal" data-target="#DeleteModal">
                                        <i class="fa fa-trash"></i>
                                    </a>                                  
                                </td>     
                            </tr>
                        </tbody>
                    </table>  
                </div>   

                <div class="Pagination">
                    <ul>
                        <li><a href="/">Previous</a></li>
                        <li class="active"><a href="/">1</a></li>
                        <li><a href="/">2</a></li>
                        <li><a href="/">3</a></li>
                        <li><a href="/">Next</a></li>
                    </ul>
                </div>


            </div>
        </div>
    </div>

    <div class="ModalBox">
        <div id="DeleteModal" class="modal fade" role="dialog">
            <div class="modal-dialog"> 
                <div class="modal-content"> 
                    <div class="modal-body"> 
                        <div class="Decline">
                            <a href="/" class="CloseModal" data-dismiss="modal">&times;</a>                       
                            <h3>Delete</h3>
                            <p>Are you sure you want to delete this Member ?</p>
                            <h4>
                                <a href="/" data-dismiss="modal">no</a>
                                <a href="/" data-dismiss="modal">Yes</a>
                            </h4>
                        </div>
                    </div> 
                </div>
            </div>
        </div> 
    </div>
    </div>
  )
}

export default UserManagment
