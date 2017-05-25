
export class ClubInfo {
    public Id: number;
    public Name : string 
    public LogoFileName: string 
    public Region: string 
    public Description: string 
    public Address: string 
    public City: string 
    public State: string 
    public ZipCode: string 
    public Phone: string 
    public Email: string 
    public Address2: string 
    public Country: string 
    public ContactName: string 

    //New fields for GGI FRD
    public ClubDisplayName  : string
    public DisplayMarketingText  : boolean
    public DisplayPlanSummary: boolean
    public DisplayPlanAccessTo: boolean
    public DisplayPlanService: boolean
    public DisplayFPMarketingText: boolean
    public DisplayPlanSection: boolean
    public OverrideClubName: boolean
    public DisplayJOLTermsText: boolean
    public JOLTermsText  : string
}