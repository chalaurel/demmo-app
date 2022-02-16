import React from "react"

import {
    Card,
    CardContent,
    Typography,
    Avatar,
    CardHeader,
    IconButton
} from "@mui/material"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import { red } from "@mui/material/colors"
type IProps = {
    data: any
}

const getName = (fName: any, lName: string) => {
    return fName + " " + lName.substring(1, 0)
}

const Cards: React.FC<IProps> = ({ data }) => {
    return data.map((d: any) => {
        return (
            <Card sx={{ maxWidth: 236, maxHeight: 350 }}>
                <CardHeader
                    title={getName(d.firstname, d.lastname)}
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                />
                <CardContent>
                    <Typography
                        sx={{ fontSize: 14 }}
                        color="text.secondary"
                        gutterBottom
                    >
                        {d.email}
                    </Typography>
                    <Typography
                        sx={{ fontSize: 14 }}
                        color="text.secondary"
                        gutterBottom
                    >
                        {d.email}
                    </Typography>
                </CardContent>
            </Card>
        )
    })
}

export default Cards
