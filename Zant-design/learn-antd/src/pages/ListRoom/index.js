import { Button } from "antd";
import { useEffect, useState } from "react";
import { getListRoom } from "../../services/roomsService"; 
import RoomGrid from "./RoomGrid";
import RoomTable from "./RoomTable";

function ListRoom() {
    const [rooms, setRooms] = useState([]);
    const [isGrid, setIsGrid] = useState(true);

    // Fetch danh sách phòng từ API
    const fetchApi = async () => {
        try {
            const response = await getListRoom();
            // đảo ngược: phòng mới nhất lên trên
            setRooms((response || []).slice().reverse());
        } catch (err) {
            console.error("Lỗi fetch rooms:", err);
            setRooms([]);
        }
    };

    useEffect(() => {
        fetchApi();
    }, []);

    const handleReload = () => {
        fetchApi();
    };

    const handleAddRoom = (newRoom) => {
        if (!newRoom) return;
        setRooms((prev) => [newRoom, ...prev]);
    };

    return (
        <>
            <Button onClick={() => setIsGrid(!isGrid)}>
                Grid/List
            </Button>

            {isGrid ? (
                <RoomGrid rooms={rooms} onAdd={handleAddRoom} />
            ) : (
                <RoomTable 
                    rooms={rooms} 
                    onReload={handleReload} 
                    onAdd={handleAddRoom} 
                />
            )}
        </>
    );
}

export default ListRoom;
