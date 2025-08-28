import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import { deleteProduct } from '../../services/ProductsService';
function DeleteProduct(props) {
    const { item, onReload } = props;
    const deleteItem = async () => {
      const result =  await deleteProduct(item.id);
        if (result) {
            onReload();
            Swal.fire(
                'Đã xóa!',
                'Bạn đã xóa thành công',
                'success'
            )
        }

    }
    const handleDelete = () => {
        Swal.fire({
            title: 'Bạn có chắc chắn muốn xóa',
            text: "Nếu bạn xóa thì bạn sẽ ko thể khôi phục đượ!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Vẫn xóa!',
            cancelButtonText: 'Hủy'
        }).then((result) => {
            if (result.isConfirmed) {
                deleteItem();

            }
        })

        console.log(item.id)
    }
    return (
        <>
            <button onClick={handleDelete}>Xóa
            </button>
        </>
    )
}
export default DeleteProduct;