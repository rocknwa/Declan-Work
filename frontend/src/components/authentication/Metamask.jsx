import { useEffect, useState } from 'react';
import { Web3 } from 'web3';
import { Button } from '../ui/button';

function MetaMask() {
    const [web3, setWeb3] = useState(null);
    const [warning, setWarning] = useState(null);
    const [provider, setProvider] = useState(null);
    const [chainId, setChainId] = useState(null);
    const [latestBlock, setLatestBlock] = useState(null);
    const [accountButtonDisabled, setAccountButtonDisabled] = useState(false);
    const [accounts, setAccounts] = useState(null);
    const [connectedAccount, setConnectedAccount] = useState(null);

    useEffect(() => {
        if (window.ethereum) {
            setWeb3(new Web3(window.ethereum));
            if (window.ethereum.isMetaMask) {
                setProvider('Connected to Ethereum with MetaMask.');
            } else {
                setProvider('Non-MetaMask Ethereum provider detected.');
            }
        } else {
            setWarning('Please install MetaMask');
            setAccountButtonDisabled(true);
        }
    }, []);

    useEffect(() => {
        async function getChainId() {
            if (web3 === null) {
                return;
            }

            setChainId(`Chain ID: ${await web3.eth.getChainId()}`);
        }

        async function getLatestBlock() {
            if (web3 === null) {
                return;
            }

            setLatestBlock(`Latest Block: ${await web3.eth.getBlockNumber()}`);

            const blockSubscription = await web3.eth.subscribe('newBlockHeaders');
            blockSubscription.on('data', block => {
                setLatestBlock(`Latest Block: ${block.number}`);
            });
        }

        getChainId();
        getLatestBlock();
    }, [web3]);

    async function connectWallet() {
        if (web3 === null) {
            return;
        }

        await window.ethereum.request({ method: 'eth_requestAccounts' });
        document.getElementById('requestAccounts')?.remove();

        const allAccounts = await web3.eth.getAccounts();
        setAccounts(allAccounts);
        setConnectedAccount(`Account: ${allAccounts[0]}`);
    }

    const disconnectWallet = () => {
        // setAccount(null);
        // setConnected(false);
        // setContract(null);
    };

    return (
        <>
            <div id="warn" style={{ color: 'red' }}>
                {warning}
            </div>
            <div id="provider">{provider}</div>
            <div id="chainId">{chainId}</div>
            <div id="latestBlock">{latestBlock}</div>
            <div id="connectedAccount">{connectedAccount}</div>
            <div>
                <button
                    onClick={() => connectWallet()}
                    id="requestAccounts"
                    disabled={accountButtonDisabled}
                >
                    Request MetaMask Accounts
                </button>
            </div>
            {accountButtonDisabled ? (
                <Button onClick={disconnectWallet} variant="contained">Disconnect</Button>
            ) : (
                <Button onClick={connectWallet} variant="contained">Connect Wallet</Button>
            )}
        </>
    );
}

export default MetaMask;