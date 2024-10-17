import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert";
import {TriangleAlertIcon} from "lucide-react";

export default function ErrorMessage({ error }: {error: string}){
    return (
        <Alert>
            <TriangleAlertIcon className="h-4 w-4" />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
        </Alert>

    )
}