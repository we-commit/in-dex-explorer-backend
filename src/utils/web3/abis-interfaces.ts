import { Interface } from '@ethersproject/abi';
import { abi as UniV2Router } from '@uniswap/v2-periphery/build/IUniswapV2Router02.json';
import { abi as IUniswapV2PairABI } from '@uniswap/v2-core/build/IUniswapV2Pair.json';
import { abi as _erc20abi } from '@uniswap/v2-core/build/ERC20.json';
import { abi as _multicallabi } from '../../abis/Multicall2.json';

export const erc20abi = _erc20abi;
export const multicallabi = _multicallabi;
export const iUniV2Router = new Interface(UniV2Router);
export const iUniswapV2PairABI = new Interface(IUniswapV2PairABI);
