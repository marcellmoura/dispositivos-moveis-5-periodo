import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { User } from "../types/User";
import { getUsers } from "../services/userService";

export default function UsersScreen() {

    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchUsers = async () => {
        try {
            setLoading(true);
            setError(false);

            const data = await getUsers();

            setUsers(data);
        }
        catch (error) {
            setError(true);
        }
        finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <View>
            <Text>Users Screen</Text>
        </View>
    );
}