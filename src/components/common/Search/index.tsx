import { MBTI_ELEMENT_OPTIONS, MBTI_TYPES_OPTIONS } from '@/constants';
import { useRef, useState } from 'react';

import Button from '@/components/common/Button';
import * as S from '@/components/common/Search/styles';

const searchOptions = ['All', 'Title', 'Content'];

interface SearchProps {
  isType?: boolean;
}

const Search = ({ isType = false }: SearchProps) => {
  const [selectedMBTI, setSelectedMBTI] = useState<string>('');
  const [searchType, setSearchType] = useState<string>('All');
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    const searchTerm = searchInputRef.current?.value;
    console.log('Selected MBTI:', selectedMBTI);
    console.log('Search Term:', searchTerm);
    console.log('Search Type:', searchType);
    // Perform search logic or pass data to parent component
  };

  return (
    <S.SearchContainer>
      <select
        className="select select-bordered w-full"
        value={selectedMBTI}
        onChange={(e) => setSelectedMBTI(e.target.value)}
      >
        <option value="">MBTI 유형을 선택하세요.</option>
        {(isType ? MBTI_TYPES_OPTIONS : MBTI_ELEMENT_OPTIONS).map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <select
        className="select select-bordered w-auto max-w-xs"
        value={searchType}
        onChange={(e) => setSearchType(e.target.value)}
      >
        {searchOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <input
        type="text"
        className="input input-bordered w-full max-w-xs"
        ref={searchInputRef}
        placeholder="Enter search terms..."
      />
      <S.SearchRow className="gap-2 justify-between">
        <Button
          classProp="w-32"
          onClick={() => {
            setSelectedMBTI('');
            if (searchInputRef.current) searchInputRef.current.value = '';
            setSearchType('All');
          }}
        >
          Cancel
        </Button>
        <Button classProp="w-32" onClick={handleSubmit}>
          Search
        </Button>
      </S.SearchRow>
    </S.SearchContainer>
  );
};

export default Search;
