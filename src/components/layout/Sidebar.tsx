'use client';

import { Card, CardContent, Typography, Box, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';

interface SidebarItem {
  name: string;
  count?: number;
  icon?: string;
}

interface SidebarProps {
  title: string;
  items: SidebarItem[];
  variant: 'category' | 'brand';
}

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  minHeight: 400,
  backgroundColor: 'white',
  borderRadius: theme.spacing(2),
  boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
  transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
  '&:hover': {
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  },
}));

const ItemBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1.5),
  borderRadius: theme.spacing(1),
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  transition: 'all 0.2s ease-in-out',
  '&:hover': {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
    transform: 'translateX(8px)',
  },
}));

export default function Sidebar({ title, items, variant }: SidebarProps) {
  return (
    <StyledCard>
      <CardContent>
        <Typography 
          variant="h6" 
          gutterBottom 
          sx={{ 
            color: 'primary.main',
            fontWeight: 600,
            borderBottom: '2px solid',
            borderColor: 'primary.light',
            pb: 1,
            mb: 2
          }}
        >
          {title}
        </Typography>
        
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          {items.map((item) => (
            <ItemBox key={item.name}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                {variant === 'brand' && (
                  <Typography sx={{ fontSize: '1.2rem' }}>{item.icon}</Typography>
                )}
                <Typography>{item.name}</Typography>
              </Box>
              {variant === 'category' && (
                <Chip 
                  label={item.count} 
                  size="small"
                  sx={{ 
                    backgroundColor: 'primary.light',
                    color: 'primary.contrastText',
                    fontWeight: 500
                  }}
                />
              )}
            </ItemBox>
          ))}
        </Box>
      </CardContent>
    </StyledCard>
  );
}