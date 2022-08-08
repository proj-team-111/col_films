<%@ WebHandler Language="VB" Class="students" %>

Imports System
Imports System.Web
Imports System.Collections.Generic
Imports System.Linq
Imports System.Net
Imports System.Web.UI
Imports System.Xml
Imports System.IO
Imports System.Drawing
Imports System.Data.SqlClient
Imports System.Data
Imports System.Xml.Serialization
Imports System.Net.Mail
Imports Newtonsoft.Json.Linq
Imports Newtonsoft.Json

Public Class students : Implements IHttpHandler
    
    Protected RequestIP As String = HttpContext.Current.Request.ServerVariables("REMOTE_ADDR")
    
    Protected request As HttpRequest = HttpContext.Current.Request
    

    Protected name, email, college_name, response As String

    
    
    Protected sb As New StringBuilder()
    

    Public Sub ProcessRequest(ByVal context As HttpContext) Implements IHttpHandler.ProcessRequest

       

        Dim id = request.QueryString("id")
        Dim otp = request.QueryString("otp")
        
        
        If id = "" Then
            
            response = "Student ID not provided"
            SaverInfoResponseinvalid()
                 
        Else
            
            Dim std As StringCollection = dbselectcol("select name, email, college_name from student_tab where student_id= '" & id & "'")
            
            'handle otp generation and sending
            If otp = "true" Then
                
                If std.Count > 0 Then
                    
                    
                    otp = randomchar()
                    
                Else
                    
                    response = "Invalid Student ID"
                    SaverInfoResponseinvalid()
                    
                End If
                
                    
                
                
            Else
                
                
                If std.Count > 0 Then
                    
                       
                    Dim stds As stds = New stds
       
                    stds.name = std.Item(0) : stds.email = std.Item(1) : stds.status = "00" : stds.college_name = std.Item(2)
        
                    System.Web.HttpContext.Current.Response.Write(JsonConvert.SerializeObject(stds))
                    
                    
                Else
                    
                    response = "Invalid Student ID"

                    SaverInfoResponseinvalid()
                    
                    
                End If
                
            End If
            
            
            
        End If
         
       

    End Sub
     
    
    Protected Sub SaverInfoResponseinvalid()
        
        System.Web.HttpContext.Current.Response.ContentType = "text/json"
       
        Dim saver As stdrErr = New stdrErr
        
        saver.status = response

        System.Web.HttpContext.Current.Response.Write(JsonConvert.SerializeObject(saver))

    End Sub
    
    Public ReadOnly Property IsReusable() As Boolean Implements IHttpHandler.IsReusable
        Get
            Return False
        End Get
    End Property

   
End Class


Public Class stdrErr
    Public Property status As String
End Class

Public Class stds
    
    Public Property status As String
    Public Property name As String
    Public Property email As String
    Public Property college_name As String
    
    
    
End Class
