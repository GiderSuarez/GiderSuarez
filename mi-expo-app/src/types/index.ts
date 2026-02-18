export interface User {
    id: string;
    name: string;
    email: string;
}

export interface AuthContextType {
    user: User | null;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
}

export interface ApiResponse<T> {
    data: T;
    message: string;
    success: boolean;
}

export type NavigationParams = {
    Home: undefined;
    Details: { itemId: number };
};