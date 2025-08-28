import { useState } from 'react';
import Modal from 'react-modal';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import { getListCategory } from '../../services/CategoryService';
import { createProduct } from '../../services/ProductsService';

function CreateProduct(props) {

    const { onReload } = props;
    const [showModal, setShowModal] = useState(false);
    const [data, setData] = useState({});
    const [dataCategory, setDataCategory] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await getListCategory();
            setDataCategory(result);
        }
        fetchApi();
    }, [])

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData({
            ...data,
            [name]: value
        })

    }
    console.log(data);
    function openModal() {
        setShowModal(true);
    }
    function closeModal() {
        setShowModal(false);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await createProduct(data);
        if (result) {
            setShowModal(false);
            onReload();
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Bạn đã tạo mới thành công',
                showConfirmButton: false,
                timer: 2000
            });

        }
    }
    console.log(dataCategory);
    return (
        <>
            <button onClick={openModal}>+ Tạo sản phẩm mới</button>
            <Modal
                isOpen={showModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <form onSubmit={handleSubmit}>
                    <table>
                        <tr>
                            <td>Tiêu đề</td>
                            <td>
                                <input type='text' name='title' onChange={handleChange} required />
                            </td>
                        </tr>

                        {dataCategory.length > 0 && (
                            <tr>
                                <td>Danh mục</td>
                                <td>
                                    <select name='category'>
                                        {dataCategory.map((item, index) => (
                                            <option key={index} value={item} >{item}</option>
                                        ))}
                                    </select>
                                </td>
                            </tr>
                        )}


                        <tr>
                            <td>Giá</td>
                            <td>
                                <input type='text' name='price' onChange={handleChange} required />
                            </td>
                        </tr>

                        <tr>
                            <td>Giảm giá</td>
                            <td>
                                <input type='text' name='discountPercentage' onChange={handleChange} required />
                            </td>
                        </tr>


                        <tr>
                            <td>Số lượng còn lại</td>
                            <td>
                                <input type='text' name='stock' onChange={handleChange} required />
                            </td>
                        </tr>

                        <tr>
                            <td>Đường dẫn ảnh</td>
                            <td>
                                <input type='text' name='thumbnail' onChange={handleChange} required />
                            </td>
                        </tr>

                        <tr>
                            <td>Mô tả</td>
                            <td>
                                <textarea rows={4} name='description' onChange={handleChange} required> </textarea>
                            </td>
                        </tr>


                        <tr>
                            <td>
                                <button onClick={closeModal}>Hủy</button>
                            </td>
                            <td>
                                <input type='submit' value="Tạo mới" />
                            </td>
                        </tr>

                    </table>
                </form>
            </Modal>
        </>
    )
}
export default CreateProduct;