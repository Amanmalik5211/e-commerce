'use client';

import { useState } from 'react';
import { Box, InputBase, IconButton, useTheme, useMediaQuery } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';

const SearchWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: 'rgba(255,255,255,0.15)',
  borderRadius: theme.shape.borderRadius * 3,
  padding: theme.spacing(0.5, 2),
  width: '100%',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: 'rgba(255,255,255,0.25)',
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(0.8),
    paddingLeft: 0,
    color: '#ffffff',
    fontSize: '0.95rem',
    '&::placeholder': {
      color: 'rgba(255,255,255,0.7)',
      opacity: 1,
    },
  },
}));

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <SearchWrapper>
      <SearchIcon sx={{ 
        mr: 1, 
        color: 'rgba(255,255,255,0.7)',
        fontSize: { sm: '1.2rem', md: '1.4rem' }
      }} />
      <StyledInputBase
        placeholder={isMediumScreen ? "Search..." : "Search products, brands and more..."}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <IconButton 
        size={isMediumScreen ? "small" : "medium"}
        sx={{ 
          color: 'white',
          p: { sm: 0.5, md: 1 },
          '&:hover': {
            bgcolor: 'rgba(255,255,255,0.1)',
          }
        }}
      >
        <SearchIcon sx={{ fontSize: { sm: '1.2rem', md: '1.4rem' } }} />
      </IconButton>
    </SearchWrapper>
  );
}