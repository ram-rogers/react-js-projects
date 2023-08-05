import { useEffect } from "react";

export function useKey(key, action) {
    useEffect(
        function () {
            function callabck(e) {
                if (e.code.toLowerCase() === key.toLowerCase()) {
                    action()
                }
            }
            document.addEventListener("keydown", callabck);

            return function () {
                document.removeEventListener('keydown', callabck)
            }
        }, [action, key]
    )
}