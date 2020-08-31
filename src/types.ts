export interface Methods {
    addTask?: (title: string) => void;
    deleteTask: (id: string) => void;
    onTaskPress?: (id: string) => void;
    goBack?: () => void;
    updateTask?: (id: string, title: string) => void;
}
