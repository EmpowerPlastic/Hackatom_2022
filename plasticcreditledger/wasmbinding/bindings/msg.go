package bindings

type IntertxMsg struct {
	RegisterAccount *RegisterAccount `json:"register_account,omitempty"`
	SetTheString    *SetTheString    `json:"set_the_string,omitempty"`
}

type RegisterAccount struct {
	Owner        string `json:"owner"`
	ConnectionId string `json:"connection_id"`
}

type SetTheString struct {
	TheString string `json:"the_string"`
	Creator   string `json:"creator"`
}
