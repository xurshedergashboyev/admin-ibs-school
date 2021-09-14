import React from "react"
import {Button} from "./styles";

export const ButtonBox = ({loading, error, success}) => {
    return (
        <Button disabled={loading || error || success} loading={loading} error={error} success={success}>
            {
                loading ? "loading..." :
                    error ? "error" :
                        success ? "success" :
                            "Submit"
            }
        </Button>
    )
}