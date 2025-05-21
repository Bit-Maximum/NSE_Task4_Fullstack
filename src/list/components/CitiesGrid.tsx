import { useState, useEffect } from 'react';
import { DataGrid,
    GridRowsProp,
    GridColDef,
    GridToolbarContainer,
    GridToolbarColumnsButton,
    GridToolbarFilterButton,
    GridToolbarExport,
} from "@mui/x-data-grid";
import { ruRU } from '@mui/x-data-grid/locales';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";


interface City {
    id: number;
    name: string;
    zipcode: string;
}


function CitiesGrid() {
    const [rows, setRows] = useState<GridRowsProp>([]);

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', flex: 0.5},
        { field: 'name', headerName: 'Город', flex: 1},
        { field: 'zipcode', headerName: 'Почтовый код', flex: 1}
    ];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://your-backend-api-url/cities'); // Замените на ваш URL
                const data: City[] = await response.json();
                setRows(data);
            } catch (err) {
                console.error("Ошибка при загрузке данных:", err);
            }
        };

        fetchData();
    }, []);


    function CustomToolbar() {
        return (
            <GridToolbarContainer>
                <GridToolbarColumnsButton />
                <GridToolbarFilterButton />
                <Box sx={{ flexGrow: 1 }} />
                <GridToolbarExport/>
            </GridToolbarContainer>
        );
    }

    return (
        <Container maxWidth="lg" sx={{height: '700px', mt: '20px'}}>
            <DataGrid
                localeText={ruRU.components.MuiDataGrid.defaultProps.localeText}
                rows={rows}
                columns={columns}

                slots={{
                    toolbar: CustomToolbar
                }}
                slotProps={{
                    pagination: {
                        rowsPerPageOptions: [ 10, 20, 30, 100 ],
                    }
                }}
            />
        </Container>
    );
}

export default CitiesGrid;