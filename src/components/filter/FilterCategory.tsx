import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import { Box, Typography } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

interface FilterCategoryProps {
    item: {
        key: number;
        name: string;
    };
}

function FilterCategory({ item }: FilterCategoryProps) {
    return (


        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                paddingX: 4,
                gap: 3,
                alignItems: 'center',
                borderLeft: {
                    xs: 'none',
                    sm: '1px solid #000',

                },
                borderBottom: {
                    xs: '1px solid #000',
                    sm: 'none',

                },
                height: 50,
                paddingY: 4

            }}
        >        <Box>
                <AccessAlarmsIcon />
            </Box>
            <Box>
                <Typography>
                    {item?.name}
                </Typography>
                <Typography>
                    consultation
                </Typography>
            </Box>
            <Box>
                <ArrowDropDownIcon />

            </Box>

        </Box>

    )
}

export default FilterCategory
