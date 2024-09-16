import React from 'react'

const ProductManagment = () => {
    return (
        <div>
            <div class="WrapperArea">
                <div class="WrapperBox">
                    <div class="Small-Wrapper">
                        <div class="SearchBox">
                            <form action="">
                                <input type="text" placeholder="Enter Key" />
                                <button>Apply</button>
                            </form>
                            <a data-target="#AddModal" data-toggle="modal" href="JavaScript:Void(0);">Add New Product</a>
                        </div>

                        <h4 class="Title">Product Management </h4>
                        <div class="TableList">
                            <table>
                                <thead>
                                    <tr>
                                        <th>S.No</th>
                                        <th width="150px">Product Name</th>
                                        <th width="100px">Image</th>
                                        <th width="150px">Category</th>
                                        <th>Price</th>
                                        <th>Description</th>
                                        <th>action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Ghaneyah Akkawi Cheese Bakery</td>
                                        <td>
                                            <img src="https://cdt.sa/wp-content/uploads/2020/03/FireShot-Capture-070-.png" alt='' />
                                        </td>
                                        <td>Saudi Products</td>
                                        <td>$100.05</td>
                                        <td>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</td>
                                        <td>
                                            <a class="Green" data-target="#EditModal" data-toggle="modal" href="JavaScript:Void(0);">
                                                <i class="fa fa-pencil-square-o"></i>
                                            </a>
                                            <a class="Red" href="JavaScript:Void(0);" data-toggle="modal" data-target="#DeleteModal">
                                                <i class="fa fa-trash"></i>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Ghaneyah Akkawi Bakery</td>
                                        <td>
                                            <img src="https://cdt.sa/wp-content/uploads/2020/03/j0tcVqFg-300x226.png" alt='' />
                                        </td>
                                        <td>Saudi Products</td>
                                        <td>$32.05</td>
                                        <td>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</td>
                                        <td>
                                            <a class="Green" data-target="#EditModal" data-toggle="modal" href="JavaScript:Void(0);">
                                                <i class="fa fa-pencil-square-o"></i>
                                            </a>
                                            <a class="Red" href="JavaScript:Void(0);" data-toggle="modal" data-target="#DeleteModal">
                                                <i class="fa fa-trash"></i>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Ghaneyah Akkawi Cheese Desserts</td>
                                        <td>
                                            <img src="https://cdt.sa/wp-content/uploads/2020/03/FireShot-Capture-070-.png" alt='' />
                                        </td>
                                        <td>Saudi Products</td>
                                        <td>$100.05</td>
                                        <td>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</td>
                                        <td>
                                            <a class="Green" data-target="#EditModal" data-toggle="modal" href="JavaScript:Void(0);">
                                                <i class="fa fa-pencil-square-o"></i>
                                            </a>
                                            <a class="Red" href="JavaScript:Void(0);" data-toggle="modal" data-target="#DeleteModal">
                                                <i class="fa fa-trash"></i>
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
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
                                    <a href="JavaScript:Void(0);" class="CloseModal" data-dismiss="modal">&times;</a>
                                    <h3>Delete</h3>
                                    <p>Are you sure you want to delete this Product  ?</p>
                                    <h4>
                                        <a href="JavaScript:Void(0);" data-dismiss="modal">no</a>
                                        <a href="JavaScript:Void(0);" data-dismiss="modal">Yes</a>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="AddModal" class="modal fade" role="dialog">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-body">
                                <a href="JavaScript:Void(0);" class="CloseModal" data-dismiss="modal">&times;</a>
                                <div class="Category">
                                    <h3>Add Product </h3>
                                    <div class="form-group">
                                        <label>Product Name </label>
                                        <input type="text" class="form-control" placeholder="Enter Product Name" />
                                    </div>

                                    <div class="form-group">
                                        <label>Image</label>
                                        <input type="file" class="form-control" />
                                    </div>

                                    <div class="form-group">
                                        <label>Category</label>
                                        <select class="form-control">
                                            <option> ----- Select Option ------ </option>
                                            <option>Saudi Products</option>
                                            <option>Turkish Products</option>
                                            <option>Cypriot products</option>
                                            <option>Uzbekistan Products</option>
                                            <option>Belarusian products</option>
                                            <option>Egyptian Products</option>
                                            <option>UAE Products</option>
                                            <option>Omani products</option>
                                            <option>Jordanian products</option>
                                        </select>
                                    </div>

                                    <div class="form-group">
                                        <label>Price</label>
                                        <input type="text" class="form-control" placeholder="Enter per unit Price" />
                                    </div>

                                    <div class="form-group">
                                        <label>Description</label>
                                        <textarea rows="5" class="form-control" placeholder="Typing ...."></textarea>
                                    </div>

                                    <button>Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="EditModal" class="modal fade" role="dialog">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-body">
                                <a href="JavaScript:Void(0);" class="CloseModal" data-dismiss="modal">&times;</a>
                                <div class="Category">
                                    <h3>Edit Product </h3>
                                    <div class="form-group">
                                        <label>Product Name </label>
                                        <input type="text" class="form-control" placeholder="Enter Product Name" value="Ghaneyah Akkawi Bakery" />
                                    </div>

                                    <div class="form-group">
                                        <label>Image</label>
                                        <input type="file" class="form-control" />
                                    </div>

                                    <div class="form-group">
                                        <label>Category</label>
                                        <select class="form-control">
                                            <option>Saudi Products</option>
                                            <option>Turkish Products</option>
                                            <option>Cypriot products</option>
                                            <option>Uzbekistan Products</option>
                                            <option>Belarusian products</option>
                                            <option>Egyptian Products</option>
                                            <option>UAE Products</option>
                                            <option>Omani products</option>
                                            <option>Jordanian products</option>
                                        </select>
                                    </div>

                                    <div class="form-group">
                                        <label>Price</label>
                                        <input type="text" class="form-control" placeholder="Enter Price" value="$100.05" />
                                    </div>

                                    <div class="form-group">
                                        <label>Description</label>
                                        <textarea rows="5" class="form-control" placeholder="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form"></textarea>
                                    </div>

                                    <button>Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProductManagment
