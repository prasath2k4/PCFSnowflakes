import {IInputs, IOutputs} from "./generated/ManifestTypes";

export class SnowFlakes implements ComponentFramework.StandardControl<IInputs, IOutputs> {

	private snowflakesDiv: HTMLDivElement;
	private snowflake1Div: HTMLDivElement;
	private snowflake2Div: HTMLDivElement;
	private snowflake3Div: HTMLDivElement;
	private snowflake4Div: HTMLDivElement;
	private snowflake5Div: HTMLDivElement;
	private snowflake6Div: HTMLDivElement;
	private snowflake7Div: HTMLDivElement;
	private snowflake8Div: HTMLDivElement;
	private snowflake9Div: HTMLDivElement;
	private snowflake10Div: HTMLDivElement;
	private snowflake11Div: HTMLDivElement;
	private snowflake12Div: HTMLDivElement;




	private _context: ComponentFramework.Context<IInputs>;
    private _notifyOutputChanged: () => void;
	private _container: HTMLDivElement;
	/**
	 * Empty constructor.
	 */
	constructor()
	{

	}

	/**
	 * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.
	 * Data-set values are not initialized here, use updateView.
	 * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.
	 * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.
	 * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.
	 * @param container If a control is marked control-type='standard', it will receive an empty div element within which it can render its content.
	 */
	public init(context: ComponentFramework.Context<IInputs>, notifyOutputChanged: () => void, state: ComponentFramework.Dictionary, container:HTMLDivElement)
	{
		// Add control initialization code
		this._context = context;
        this._notifyOutputChanged = notifyOutputChanged;
		this._container = container;

		this.snowflakesDiv = document.createElement("div");
		this.snowflakesDiv.setAttribute("class","snowflakes");
		this.snowflakesDiv.setAttribute("aria-hidden","true");

		this.snowflake1Div = document.createElement("div");
		this.snowflake1Div.setAttribute("class","snowflake");
		this.snowflake1Div.textContent = "❅";

		this.snowflake2Div = document.createElement("div");
		this.snowflake2Div.setAttribute("class","snowflake");
		this.snowflake2Div.textContent = "❅";

		this.snowflake3Div = document.createElement("div");
		this.snowflake3Div.setAttribute("class","snowflake");
		this.snowflake3Div.textContent = "❅";

		this.snowflake4Div = document.createElement("div");
		this.snowflake4Div.setAttribute("class","snowflake");
		this.snowflake4Div.textContent = "❅";

		this.snowflake5Div = document.createElement("div");
		this.snowflake5Div.setAttribute("class","snowflake");
		this.snowflake5Div.textContent = "❅";

		this.snowflake6Div = document.createElement("div");
		this.snowflake6Div.setAttribute("class","snowflake");
		this.snowflake6Div.textContent = "❅";

		this.snowflake7Div = document.createElement("div");
		this.snowflake7Div.setAttribute("class","snowflake");
		this.snowflake7Div.textContent = "❅";

		this.snowflake8Div = document.createElement("div");
		this.snowflake8Div.setAttribute("class","snowflake");
		this.snowflake8Div.textContent = "❅";

		this.snowflake9Div = document.createElement("div");
		this.snowflake9Div.setAttribute("class","snowflake");
		this.snowflake9Div.textContent = "❅";

		this.snowflake10Div = document.createElement("div");
		this.snowflake10Div.setAttribute("class","snowflake");
		this.snowflake10Div.textContent = "❅";

		this.snowflake11Div = document.createElement("div");
		this.snowflake11Div.setAttribute("class","snowflake");
		this.snowflake11Div.textContent = "❅";

		this.snowflake12Div = document.createElement("div");
		this.snowflake12Div.setAttribute("class","snowflake");
		this.snowflake12Div.textContent = "❅";

		this.snowflakesDiv.appendChild(this.snowflake1Div);
		this.snowflakesDiv.appendChild(this.snowflake2Div);
		this.snowflakesDiv.appendChild(this.snowflake3Div);
		this.snowflakesDiv.appendChild(this.snowflake4Div);
		this.snowflakesDiv.appendChild(this.snowflake5Div);
		this.snowflakesDiv.appendChild(this.snowflake6Div);
		this.snowflakesDiv.appendChild(this.snowflake7Div);
		this.snowflakesDiv.appendChild(this.snowflake8Div);
		this.snowflakesDiv.appendChild(this.snowflake9Div);
		this.snowflakesDiv.appendChild(this.snowflake10Div);
		this.snowflakesDiv.appendChild(this.snowflake11Div);
		this.snowflakesDiv.appendChild(this.snowflake12Div);
	
		this._container.appendChild(this.snowflakesDiv);


	}


	/**
	 * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.
	 * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions
	 */
	public updateView(context: ComponentFramework.Context<IInputs>): void
	{
		// Add code to update control view
	}

	/** 
	 * It is called by the framework prior to a control receiving new data. 
	 * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as “bound” or “output”
	 */
	public getOutputs(): IOutputs
	{
		return {};
	}

	/** 
	 * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.
	 * i.e. cancelling any pending remote calls, removing listeners, etc.
	 */
	public destroy(): void
	{
		// Add code to cleanup control if necessary
	}
}