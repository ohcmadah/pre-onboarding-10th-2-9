import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { KEYBOARD_KEYS } from '../utils/keyboard';
import { Recommendation } from '../@types/recommendation';
import useRecommendations from '../hooks/useRecommendations';

type State = { searchText: string; recommendations: Recommendation[]; activeIndex: number };
type Action =
  | { type: 'KEY_DOWN'; payload: { key: KEYBOARD_KEYS } }
  | { type: 'CHANGE_TEXT'; payload: { text: string } };
type Dispatch = React.Dispatch<Action>;

const StateContext = createContext<State | null>(null);
const DispatchContext = createContext<Dispatch | null>(null);

const changeIndex = (prevIndex: number, key: KEYBOARD_KEYS, maxIndex: number): number => {
  switch (key) {
    case KEYBOARD_KEYS.ARROW_DOWN:
      if (prevIndex === maxIndex) {
        return maxIndex;
      }
      return prevIndex + 1;

    case KEYBOARD_KEYS.ARROW_UP:
      if (prevIndex === 0) {
        return 0;
      }
      return prevIndex - 1;

    default:
      return -1;
  }
};

export const SearchBarContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [searchText, setSearchText] = useState('');
  const recommendations = useRecommendations({ name: searchText });
  const [activeIndex, setActiveIndex] = useState(-1);

  const state = useMemo(
    () => ({ searchText, recommendations, activeIndex }),
    [searchText, recommendations, activeIndex],
  );
  const dispatch = useCallback(
    (action: Action) => {
      switch (action.type) {
        case 'CHANGE_TEXT':
          setSearchText(action.payload.text);
          setActiveIndex(-1);
          break;

        case 'KEY_DOWN':
          setActiveIndex((prevIndex) => {
            return changeIndex(prevIndex, action.payload.key, recommendations.length - 1);
          });
          break;

        default:
          break;
      }
    },
    [state],
  );

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>{children}</DispatchContext.Provider>
    </StateContext.Provider>
  );
};

export const useSearchBarState = () => {
  const state = useContext(StateContext);
  if (!state) {
    throw new Error('SearchBarContextProvider not found');
  }
  return state;
};

export const useSearchBarDispatch = () => {
  const dispatch = useContext(DispatchContext);
  if (!dispatch) {
    throw new Error('SearchBarContextProvider not found');
  }
  return dispatch;
};
